-- Script d'insertion des thèmes
-- Généré automatiquement le 2025-12-30T20:02:16.134Z

-- Insérer le type de thème MUI
INSERT INTO TB_UI_THEME_TYPES (code, name, description, status, created_by)
VALUES ('mui', 'Material-UI', 'Thèmes Material-UI personnalisés', 'ACTIVE', 'system')
ON CONFLICT (code) DO NOTHING;


-- Thème: catppuccin
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'catppuccin', 'catppuccin', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(180, 190, 254)"},"secondary":{"main":"rgb(35, 38, 52)"},"background":{"default":"rgb(17, 17, 27)"}}}', 'ACTIVE', 1, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'catppuccin' FROM TB_UI_THEMES t WHERE t.code = 'catppuccin'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'catppuccin' FROM TB_UI_THEMES t WHERE t.code = 'catppuccin'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: cosmic
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'cosmic', 'cosmic', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(147, 51, 234)"},"secondary":{"main":"rgb(25, 25, 60)"},"background":{"default":"rgb(5, 5, 25)"}}}', 'ACTIVE', 2, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'cosmic' FROM TB_UI_THEMES t WHERE t.code = 'cosmic'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'cosmic' FROM TB_UI_THEMES t WHERE t.code = 'cosmic'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: cyber Neon
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'cyberneon', 'cyber Neon', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 101, 254)"},"secondary":{"main":"rgb(0, 0, 40)"},"background":{"default":"rgb(0, 0, 15)"}}}', 'ACTIVE', 3, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'cyber Neon' FROM TB_UI_THEMES t WHERE t.code = 'cyberneon'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'cyber Neon' FROM TB_UI_THEMES t WHERE t.code = 'cyberneon'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: cyberpunk
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'cyberpunk', 'cyberpunk', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 0, 255)"},"secondary":{"main":"rgb(30, 15, 50)"},"background":{"default":"rgb(8, 8, 18)"}}}', 'ACTIVE', 4, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'cyberpunk' FROM TB_UI_THEMES t WHERE t.code = 'cyberpunk'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'cyberpunk' FROM TB_UI_THEMES t WHERE t.code = 'cyberpunk'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: dark
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'dark', 'dark', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(88, 166, 255)"},"secondary":{"main":"rgb(87, 96, 106)"},"background":{"default":"rgb(13, 17, 23)"}}}', 'ACTIVE', 5, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'dark' FROM TB_UI_THEMES t WHERE t.code = 'dark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'dark' FROM TB_UI_THEMES t WHERE t.code = 'dark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: dracula
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'dracula', 'dracula', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(189, 147, 249)"},"secondary":{"main":"rgb(45, 48, 65)"},"background":{"default":"rgb(20, 21, 30)"}}}', 'ACTIVE', 6, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'dracula' FROM TB_UI_THEMES t WHERE t.code = 'dracula'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'dracula' FROM TB_UI_THEMES t WHERE t.code = 'dracula'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: everforest
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'everforest', 'everforest', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(148, 191, 88)"},"secondary":{"main":"rgb(39, 45, 30)"},"background":{"default":"rgb(21, 24, 16)"}}}', 'ACTIVE', 7, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'everforest' FROM TB_UI_THEMES t WHERE t.code = 'everforest'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'everforest' FROM TB_UI_THEMES t WHERE t.code = 'everforest'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: fifty Shades
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'fiftyshades', 'fifty Shades', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(204, 204, 204)"},"secondary":{"main":"rgb(51, 51, 51)"},"background":{"default":"rgb(20, 20, 20)"}}}', 'ACTIVE', 8, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'fifty Shades' FROM TB_UI_THEMES t WHERE t.code = 'fiftyshades'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'fifty Shades' FROM TB_UI_THEMES t WHERE t.code = 'fiftyshades'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: github Dark
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'githubdark', 'github Dark', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(88, 166, 255)"},"secondary":{"main":"rgb(48, 54, 61)"},"background":{"default":"rgb(13, 17, 23)"}}}', 'ACTIVE', 9, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'github Dark' FROM TB_UI_THEMES t WHERE t.code = 'githubdark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'github Dark' FROM TB_UI_THEMES t WHERE t.code = 'githubdark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: glass
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'glass', 'glass', id, '{"palette":{"mode":"light","primary":{"main":"rgb(35, 98, 234)"},"secondary":{"main":"rgb(156, 163, 175)"},"background":{"default":"rgb(243, 244, 246)"}}}', 'ACTIVE', 10, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'glass' FROM TB_UI_THEMES t WHERE t.code = 'glass'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'glass' FROM TB_UI_THEMES t WHERE t.code = 'glass'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Blue
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientblue', 'gradient Blue', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(59, 130, 246)"},"secondary":{"main":"rgb(30, 64, 175)"},"background":{"default":"rgb(15, 52, 96)"}}}', 'ACTIVE', 11, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Blue' FROM TB_UI_THEMES t WHERE t.code = 'gradientblue'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Blue' FROM TB_UI_THEMES t WHERE t.code = 'gradientblue'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Fire
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientfire', 'gradient Fire', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(251, 146, 60)"},"secondary":{"main":"rgb(234, 88, 12)"},"background":{"default":"rgb(45, 10, 5)"}}}', 'ACTIVE', 12, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Fire' FROM TB_UI_THEMES t WHERE t.code = 'gradientfire'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Fire' FROM TB_UI_THEMES t WHERE t.code = 'gradientfire'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Gray
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientgray', 'gradient Gray', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(156, 163, 175)"},"secondary":{"main":"rgb(75, 85, 99)"},"background":{"default":"rgb(31, 41, 55)"}}}', 'ACTIVE', 13, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Gray' FROM TB_UI_THEMES t WHERE t.code = 'gradientgray'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Gray' FROM TB_UI_THEMES t WHERE t.code = 'gradientgray'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Green
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientgreen', 'gradient Green', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(52, 211, 153)"},"secondary":{"main":"rgb(16, 185, 129)"},"background":{"default":"rgb(20, 60, 40)"}}}', 'ACTIVE', 14, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Green' FROM TB_UI_THEMES t WHERE t.code = 'gradientgreen'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Green' FROM TB_UI_THEMES t WHERE t.code = 'gradientgreen'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Neutral
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientneutral', 'gradient Neutral', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(163, 163, 163)"},"secondary":{"main":"rgb(115, 115, 115)"},"background":{"default":"rgb(38, 38, 38)"}}}', 'ACTIVE', 15, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Neutral' FROM TB_UI_THEMES t WHERE t.code = 'gradientneutral'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Neutral' FROM TB_UI_THEMES t WHERE t.code = 'gradientneutral'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Ocean
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientocean', 'gradient Ocean', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(6, 182, 212)"},"secondary":{"main":"rgb(14, 116, 144)"},"background":{"default":"rgb(8, 28, 48)"}}}', 'ACTIVE', 16, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Ocean' FROM TB_UI_THEMES t WHERE t.code = 'gradientocean'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Ocean' FROM TB_UI_THEMES t WHERE t.code = 'gradientocean'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Orange
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientorange', 'gradient Orange', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(249, 115, 22)"},"secondary":{"main":"rgb(234, 88, 12)"},"background":{"default":"rgb(90, 40, 10)"}}}', 'ACTIVE', 17, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Orange' FROM TB_UI_THEMES t WHERE t.code = 'gradientorange'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Orange' FROM TB_UI_THEMES t WHERE t.code = 'gradientorange'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Pink
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientpink', 'gradient Pink', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(236, 72, 153)"},"secondary":{"main":"rgb(219, 39, 119)"},"background":{"default":"rgb(112, 26, 71)"}}}', 'ACTIVE', 18, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Pink' FROM TB_UI_THEMES t WHERE t.code = 'gradientpink'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Pink' FROM TB_UI_THEMES t WHERE t.code = 'gradientpink'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Purple
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientpurple', 'gradient Purple', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(168, 85, 247)"},"secondary":{"main":"rgb(126, 34, 206)"},"background":{"default":"rgb(55, 25, 88)"}}}', 'ACTIVE', 19, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Purple' FROM TB_UI_THEMES t WHERE t.code = 'gradientpurple'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Purple' FROM TB_UI_THEMES t WHERE t.code = 'gradientpurple'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Rainbow
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientrainbow', 'gradient Rainbow', id, '{"palette":{"mode":"light","primary":{"main":"rgb(219, 39, 119)"},"secondary":{"main":"rgb(241, 245, 249)"},"background":{"default":"rgb(250, 250, 250)"}}}', 'ACTIVE', 20, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Rainbow' FROM TB_UI_THEMES t WHERE t.code = 'gradientrainbow'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Rainbow' FROM TB_UI_THEMES t WHERE t.code = 'gradientrainbow'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Silver
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientsilver', 'gradient Silver', id, '{"palette":{"mode":"light","primary":{"main":"rgb(100, 116, 139)"},"secondary":{"main":"rgb(203, 213, 225)"},"background":{"default":"rgb(230, 235, 240)"}}}', 'ACTIVE', 21, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Silver' FROM TB_UI_THEMES t WHERE t.code = 'gradientsilver'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Silver' FROM TB_UI_THEMES t WHERE t.code = 'gradientsilver'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Slate
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientslate', 'gradient Slate', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(148, 163, 184)"},"secondary":{"main":"rgb(51, 65, 85)"},"background":{"default":"rgb(15, 23, 42)"}}}', 'ACTIVE', 22, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Slate' FROM TB_UI_THEMES t WHERE t.code = 'gradientslate'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Slate' FROM TB_UI_THEMES t WHERE t.code = 'gradientslate'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Stone
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientstone', 'gradient Stone', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(168, 162, 158)"},"secondary":{"main":"rgb(87, 83, 78)"},"background":{"default":"rgb(41, 37, 36)"}}}', 'ACTIVE', 23, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Stone' FROM TB_UI_THEMES t WHERE t.code = 'gradientstone'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Stone' FROM TB_UI_THEMES t WHERE t.code = 'gradientstone'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gradient Sunset
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gradientsunset', 'gradient Sunset', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(251, 146, 60)"},"secondary":{"main":"rgb(244, 63, 94)"},"background":{"default":"rgb(55, 25, 45)"}}}', 'ACTIVE', 24, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gradient Sunset' FROM TB_UI_THEMES t WHERE t.code = 'gradientsunset'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gradient Sunset' FROM TB_UI_THEMES t WHERE t.code = 'gradientsunset'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: gruvbox
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'gruvbox', 'gruvbox', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(250, 189, 47)"},"secondary":{"main":"rgb(60, 48, 38)"},"background":{"default":"rgb(29, 24, 18)"}}}', 'ACTIVE', 25, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'gruvbox' FROM TB_UI_THEMES t WHERE t.code = 'gruvbox'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'gruvbox' FROM TB_UI_THEMES t WHERE t.code = 'gruvbox'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: halloween
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'halloween', 'halloween', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 191, 0)"},"secondary":{"main":"rgb(38, 38, 38)"},"background":{"default":"rgb(12, 12, 12)"}}}', 'ACTIVE', 26, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'halloween' FROM TB_UI_THEMES t WHERE t.code = 'halloween'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'halloween' FROM TB_UI_THEMES t WHERE t.code = 'halloween'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: hologram
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'hologram', 'hologram', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(50, 254, 255)"},"secondary":{"main":"rgb(156, 163, 175)"},"background":{"default":"rgb(0, 13, 20)"}}}', 'ACTIVE', 27, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'hologram' FROM TB_UI_THEMES t WHERE t.code = 'hologram'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'hologram' FROM TB_UI_THEMES t WHERE t.code = 'hologram'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: kanagawa
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'kanagawa', 'kanagawa', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(226, 97, 54)"},"secondary":{"main":"rgb(47, 33, 28)"},"background":{"default":"rgb(25, 17, 15)"}}}', 'ACTIVE', 28, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'kanagawa' FROM TB_UI_THEMES t WHERE t.code = 'kanagawa'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'kanagawa' FROM TB_UI_THEMES t WHERE t.code = 'kanagawa'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: lava
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'lava', 'lava', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 101, 50)"},"secondary":{"main":"rgb(76, 19, 0)"},"background":{"default":"rgb(40, 10, 0)"}}}', 'ACTIVE', 29, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'lava' FROM TB_UI_THEMES t WHERE t.code = 'lava'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'lava' FROM TB_UI_THEMES t WHERE t.code = 'lava'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: light
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'light', 'light', id, '{"palette":{"mode":"light","primary":{"main":"rgb(37, 99, 235)"},"secondary":{"main":"rgb(241, 245, 249)"},"background":{"default":"rgb(250, 251, 252)"}}}', 'ACTIVE', 30, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'light' FROM TB_UI_THEMES t WHERE t.code = 'light'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'light' FROM TB_UI_THEMES t WHERE t.code = 'light'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: material
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'material', 'material', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(25, 140, 255)"},"secondary":{"main":"rgb(0, 40, 81)"},"background":{"default":"rgb(0, 25, 51)"}}}', 'ACTIVE', 31, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'material' FROM TB_UI_THEMES t WHERE t.code = 'material'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'material' FROM TB_UI_THEMES t WHERE t.code = 'material'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: matrix
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'matrix', 'matrix', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(0, 255, 0)"},"secondary":{"main":"rgb(0, 30, 0)"},"background":{"default":"rgb(0, 0, 0)"}}}', 'ACTIVE', 32, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'matrix' FROM TB_UI_THEMES t WHERE t.code = 'matrix'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'matrix' FROM TB_UI_THEMES t WHERE t.code = 'matrix'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: minimal
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'minimal', 'minimal', id, '{"palette":{"mode":"light","primary":{"main":"rgb(51, 51, 51)"},"secondary":{"main":"rgb(242, 242, 242)"},"background":{"default":"rgb(249, 249, 249)"}}}', 'ACTIVE', 33, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'minimal' FROM TB_UI_THEMES t WHERE t.code = 'minimal'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'minimal' FROM TB_UI_THEMES t WHERE t.code = 'minimal'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: modern Dark
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'moderndark', 'modern Dark', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(0, 230, 255)"},"secondary":{"main":"rgb(45, 52, 70)"},"background":{"default":"rgb(10, 10, 15)"}}}', 'ACTIVE', 34, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'modern Dark' FROM TB_UI_THEMES t WHERE t.code = 'moderndark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'modern Dark' FROM TB_UI_THEMES t WHERE t.code = 'moderndark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: monokai
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'monokai', 'monokai', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(174, 129, 255)"},"secondary":{"main":"rgb(45, 45, 40)"},"background":{"default":"rgb(23, 23, 19)"}}}', 'ACTIVE', 35, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'monokai' FROM TB_UI_THEMES t WHERE t.code = 'monokai'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'monokai' FROM TB_UI_THEMES t WHERE t.code = 'monokai'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: neon Blue
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'neonblue', 'neon Blue', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(0, 214, 255)"},"secondary":{"main":"rgb(20, 45, 80)"},"background":{"default":"rgb(5, 12, 25)"}}}', 'ACTIVE', 36, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'neon Blue' FROM TB_UI_THEMES t WHERE t.code = 'neonblue'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'neon Blue' FROM TB_UI_THEMES t WHERE t.code = 'neonblue'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: neon Green
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'neongreen', 'neon Green', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(57, 255, 20)"},"secondary":{"main":"rgb(20, 60, 20)"},"background":{"default":"rgb(5, 15, 5)"}}}', 'ACTIVE', 37, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'neon Green' FROM TB_UI_THEMES t WHERE t.code = 'neongreen'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'neon Green' FROM TB_UI_THEMES t WHERE t.code = 'neongreen'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: neon Pink
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'neonpink', 'neon Pink', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 20, 220)"},"secondary":{"main":"rgb(60, 20, 80)"},"background":{"default":"rgb(15, 5, 20)"}}}', 'ACTIVE', 38, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'neon Pink' FROM TB_UI_THEMES t WHERE t.code = 'neonpink'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'neon Pink' FROM TB_UI_THEMES t WHERE t.code = 'neonpink'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: nord
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'nord', 'nord', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(136, 192, 208)"},"secondary":{"main":"rgb(46, 52, 64)"},"background":{"default":"rgb(22, 25, 32)"}}}', 'ACTIVE', 39, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'nord' FROM TB_UI_THEMES t WHERE t.code = 'nord'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'nord' FROM TB_UI_THEMES t WHERE t.code = 'nord'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: oceanic
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'oceanic', 'oceanic', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(25, 178, 255)"},"secondary":{"main":"rgb(0, 50, 76)"},"background":{"default":"rgb(0, 27, 40)"}}}', 'ACTIVE', 40, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'oceanic' FROM TB_UI_THEMES t WHERE t.code = 'oceanic'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'oceanic' FROM TB_UI_THEMES t WHERE t.code = 'oceanic'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: one Dark
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'onedark', 'one Dark', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(97, 175, 239)"},"secondary":{"main":"rgb(35, 39, 48)"},"background":{"default":"rgb(18, 20, 26)"}}}', 'ACTIVE', 41, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'one Dark' FROM TB_UI_THEMES t WHERE t.code = 'onedark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'one Dark' FROM TB_UI_THEMES t WHERE t.code = 'onedark'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: palenight
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'palenight', 'palenight', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(141, 153, 189)"},"secondary":{"main":"rgb(29, 35, 51)"},"background":{"default":"rgb(18, 22, 32)"}}}', 'ACTIVE', 42, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'palenight' FROM TB_UI_THEMES t WHERE t.code = 'palenight'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'palenight' FROM TB_UI_THEMES t WHERE t.code = 'palenight'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: prism
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'prism', 'prism', id, '{"palette":{"mode":"light","primary":{"main":"rgb(187, 50, 255)"},"secondary":{"main":"rgb(156, 163, 175)"},"background":{"default":"rgb(249, 249, 249)"}}}', 'ACTIVE', 43, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'prism' FROM TB_UI_THEMES t WHERE t.code = 'prism'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'prism' FROM TB_UI_THEMES t WHERE t.code = 'prism'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: retro
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'retro', 'retro', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 204, 50)"},"secondary":{"main":"rgb(61, 45, 0)"},"background":{"default":"rgb(25, 19, 0)"}}}', 'ACTIVE', 44, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'retro' FROM TB_UI_THEMES t WHERE t.code = 'retro'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'retro' FROM TB_UI_THEMES t WHERE t.code = 'retro'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: rose Pine
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'rosepine', 'rose Pine', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(219, 112, 147)"},"secondary":{"main":"rgb(30, 30, 46)"},"background":{"default":"rgb(16, 16, 24)"}}}', 'ACTIVE', 45, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'rose Pine' FROM TB_UI_THEMES t WHERE t.code = 'rosepine'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'rose Pine' FROM TB_UI_THEMES t WHERE t.code = 'rosepine'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: solarized
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'solarized', 'solarized', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(181, 137, 0)"},"secondary":{"main":"rgb(7, 54, 66)"},"background":{"default":"rgb(0, 30, 40)"}}}', 'ACTIVE', 46, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'solarized' FROM TB_UI_THEMES t WHERE t.code = 'solarized'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'solarized' FROM TB_UI_THEMES t WHERE t.code = 'solarized'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: synthwave
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'synthwave', 'synthwave', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(255, 16, 240)"},"secondary":{"main":"rgb(45, 20, 70)"},"background":{"default":"rgb(15, 5, 30)"}}}', 'ACTIVE', 47, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'synthwave' FROM TB_UI_THEMES t WHERE t.code = 'synthwave'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'synthwave' FROM TB_UI_THEMES t WHERE t.code = 'synthwave'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: tokyo Night
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'tokyonight', 'tokyo Night', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(158, 134, 200)"},"secondary":{"main":"rgb(36, 37, 53)"},"background":{"default":"rgb(18, 18, 29)"}}}', 'ACTIVE', 48, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'tokyo Night' FROM TB_UI_THEMES t WHERE t.code = 'tokyonight'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'tokyo Night' FROM TB_UI_THEMES t WHERE t.code = 'tokyonight'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;


-- Thème: tron
INSERT INTO TB_UI_THEMES (code, name, theme_type_id, theme_definition, status, order_index, created_by)
SELECT 'tron', 'tron', id, '{"palette":{"mode":"dark","primary":{"main":"rgb(50, 254, 255)"},"secondary":{"main":"rgb(0, 61, 61)"},"background":{"default":"rgb(0, 25, 25)"}}}', 'ACTIVE', 49, 'system'
FROM TB_UI_THEME_TYPES WHERE code = 'mui'
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  theme_definition = EXCLUDED.theme_definition,
  order_index = EXCLUDED.order_index,
  last_modified_by = 'system',
  last_modified_date = CURRENT_TIMESTAMP;

-- Traductions françaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'fr', 'tron' FROM TB_UI_THEMES t WHERE t.code = 'tron'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

-- Traductions anglaises
INSERT INTO TB_UI_THEME_TRANSLATIONS (theme_id, language_code, name)
SELECT t.id, 'en', 'tron' FROM TB_UI_THEMES t WHERE t.code = 'tron'
ON CONFLICT (theme_id, language_code) DO UPDATE SET name = EXCLUDED.name;

