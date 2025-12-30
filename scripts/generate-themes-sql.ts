/**
 * Script de génération SQL pour insérer tous les thèmes dans la DB
 * Lit les fichiers thèmes de lottosylvain-ui et génère les INSERT
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemins
const themesDir = path.join(__dirname, '../src/themes');
const outputFile = path.join(__dirname, '../themes-insert.sql');

console.log('🔄 Génération du script SQL d\'insertion des thèmes...');

// Type pour les thèmes
interface ThemeData {
  code: string;
  name: string;
  definition: any;
}

// Fonction pour lire un thème depuis son fichier
function readTheme(filePath: string): ThemeData | null {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const themeName = path.basename(filePath, '.ts');

    // Déterminer le mode (dark/light) à partir du contenu
    const isDark = content.includes("'dark'") || content.includes('"dark"');

    // Créer une définition de thème basique mais représentative
    const themeCode = themeName.toLowerCase().replace(/theme$/, '');
    const themeNameDisplay = themeName.replace(/([A-Z])/g, ' $1').trim();

    // Extraire quelques couleurs clés si possible
    const primaryMatch = content.match(/primary:\s*{\s*main:\s*['"]([^'"]+)['"]/);
    const secondaryMatch = content.match(/secondary:\s*{\s*main:\s*['"]([^'"]+)['"]/);
    const backgroundMatch = content.match(/background:\s*{\s*default:\s*['"]([^'"]+)['"]/);

    const primaryColor = primaryMatch ? primaryMatch[1] : (isDark ? '#90caf9' : '#1976d2');
    const secondaryColor = secondaryMatch ? secondaryMatch[1] : (isDark ? '#f48fb1' : '#dc004e');
    const backgroundColor = backgroundMatch ? backgroundMatch[1] : (isDark ? '#121212' : '#ffffff');

    return {
      code: themeCode,
      name: themeNameDisplay,
      definition: {
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: { main: primaryColor },
          secondary: { main: secondaryColor },
          background: { default: backgroundColor }
        }
      }
    };
  } catch (error) {
    console.error(`Erreur lecture ${filePath}:`, error);
    return null;
  }
}

// Lire tous les fichiers thèmes
const themeFiles = fs.readdirSync(themesDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => path.join(themesDir, f));

console.log(`📁 ${themeFiles.length} fichiers thèmes trouvés`);

// Générer les thèmes
const themes: ThemeData[] = [];
for (const file of themeFiles) {
  const theme = readTheme(file);
  if (theme) {
    themes.push(theme);
  }
}

console.log(`✅ ${themes.length} thèmes chargés`);

// Générer le SQL
let sql = `-- Script d'insertion des thèmes
-- Généré automatiquement le ${new Date().toISOString()}

-- Insérer le type de thème MUI
INSERT INTO TB_UI_THEME_TYPES (code, name, description, status, created_by)
VALUES ('mui', 'Material-UI', 'Thèmes Material-UI personnalisés', 'ACTIVE', 'system')
ON CONFLICT (code) DO NOTHING;

`;

themes.forEach((theme, index) => {
  const orderIndex = index + 1;
  const themeJson = JSON.stringify(theme.definition).replace(/'/g, "''");

  sql += `
-- Thème: ${theme.name}
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT '${theme.code}', '${theme.name}', id, '${themeJson}', 'ACTIVE', ${orderIndex}, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', '${theme.name}' FROM TB_UI_THEMES t WHERE t.code = '${theme.code}'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', '${theme.name}' FROM TB_UI_THEMES t WHERE t.code = '${theme.code}'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

`;
});

// Écrire le fichier
fs.writeFileSync(outputFile, sql);
console.log(`💾 Script SQL généré: ${outputFile}`);
console.log(`📊 ${themes.length} thèmes à insérer`);