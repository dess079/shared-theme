-- Tables pour le système de thèmes partagé
-- À exécuter dans la base de données db_apps

-- Types de thèmes (MUI, Tailwind, etc.)
CREATE TABLE IF NOT EXISTS TB_UI_THEME_TYPES (
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

-- Thèmes avec définition JSONB
CREATE TABLE IF NOT EXISTS TB_UI_THEMES (
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

-- Traductions des thèmes
CREATE TABLE IF NOT EXISTS TB_UI_THEME_TRANSLATIONS (
    id SERIAL PRIMARY KEY,
    theme_id INTEGER NOT NULL REFERENCES TB_UI_THEMES(id) ON DELETE CASCADE,
    language_code TEXT NOT NULL,
    name TEXT NOT NULL,
    UNIQUE(theme_id, language_code)
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_tb_ui_themes_status ON TB_UI_THEMES(status);
CREATE INDEX IF NOT EXISTS idx_tb_ui_themes_code ON TB_UI_THEMES(code);
CREATE INDEX IF NOT EXISTS idx_tb_ui_theme_translations_theme_id ON TB_UI_THEME_TRANSLATIONS(theme_id);

-- User read-only pour la bibliothèque
-- À exécuter séparément avec un mot de passe sécurisé :
-- CREATE USER theme_user WITH PASSWORD 'your_secure_password';
-- GRANT SELECT ON TB_UI_THEMES, TB_UI_THEME_TYPES, TB_UI_THEME_TRANSLATIONS TO theme_user;