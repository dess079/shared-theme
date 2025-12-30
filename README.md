# shared-theme

Bibliothèque partagée de gestion des thèmes pour applications React avec Material-UI.

## Installation

```bash
npm install shared-theme
```

## Utilisation

Ajoutez le composant `ThemeSelector` dans votre toolbar :

```tsx
import { ThemeSelector } from 'shared-theme';

function App() {
  return (
    <div>
      {/* Le sélecteur détecte automatiquement l'environnement et charge les thèmes */}
      <ThemeSelector />
    </div>
  );
}
```

## Prérequis

### Base de données
Les tables suivantes doivent être créées dans `db_apps` :

```sql
-- Types de thèmes
CREATE TABLE TB_UI_THEME_TYPES (
    id SERIAL PRIMARY KEY,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'ACTIVE',
    created_by TEXT NOT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by TEXT,
    last_modified_date TIMESTAMP
);

-- Thèmes
CREATE TABLE TB_UI_THEMES (
    id SERIAL PRIMARY KEY,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    theme_type_id INTEGER NOT NULL REFERENCES TB_UI_THEME_TYPES(id),
    theme_definition JSONB NOT NULL,
    status TEXT NOT NULL DEFAULT 'ACTIVE',
    order_index INTEGER NOT NULL DEFAULT 0,
    created_by TEXT NOT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by TEXT,
    last_modified_date TIMESTAMP
);

-- Traductions
CREATE TABLE TB_UI_THEME_TRANSLATIONS (
    id SERIAL PRIMARY KEY,
    theme_id INTEGER NOT NULL REFERENCES TB_UI_THEMES(id) ON DELETE CASCADE,
    language_code TEXT NOT NULL,
    name TEXT NOT NULL,
    UNIQUE(theme_id, language_code)
);
```

### PostgREST
Service PostgREST déployé pour exposer la DB via HTTP :

```yaml
# docker-compose.yml
services:
  postgrest:
    image: postgrest/postgrest
    environment:
      PGRST_DB_URI: postgres://theme_user:password@db:5432/portail
      PGRST_DB_SCHEMA: public
      PGRST_DB_ANON_ROLE: theme_user
    ports:
      - "3001:3000"  # local
      - "8091:3000"  # container
```

### User DB
```sql
CREATE USER theme_user WITH PASSWORD 'secure_password';
GRANT SELECT ON TB_UI_THEMES, TB_UI_THEME_TYPES, TB_UI_THEME_TRANSLATIONS TO theme_user;
```

## Fonctionnement

1. **Détection automatique** : Le composant détecte l'environnement (local/container/cloud) basé sur l'URL
2. **Chargement DB** : Récupère les thèmes depuis PostgREST
3. **Application** : Applique le thème MUI avec transition douce
4. **Persistance** : Sauvegarde la préférence utilisateur dans localStorage

## Environnements supportés

- **Local** : `http://localhost:3001` (PostgREST)
- **Container** : `http://localhost:8091` (PostgREST)
- **Cloud** : `https://api.sdfullstackdev.ca` (PostgREST)

## Développement

```bash
# Générer le script SQL des thèmes
npm run generate-sql

# Build
npm run build

# Développement
npm run dev
```

## Licence

MIT