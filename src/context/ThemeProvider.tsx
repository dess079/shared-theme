/**
 * ThemeProvider pour la gestion centralisée des thèmes
 * Charge les thèmes depuis la base de données et applique automatiquement
 * l'environnement détecté
 */

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, createTheme } from '@mui/material/styles';
import { EnvironmentDetector } from '../services/environmentDetector';
import { ThemeService } from '../services/themeService';
import { DATABASE_CONFIGS } from '../types/theme.types';

interface ThemeContextProps {
  currentTheme: string | null;
  availableThemes: Array<{ code: string; name: string }>;
  isLoading: boolean;
  error: string | null;
  setTheme: (themeCode: string) => Promise<void>;
  refreshThemes: () => Promise<void>;
  muiTheme: Theme | null;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'catppuccin'
}) => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const [availableThemes, setAvailableThemes] = useState<Array<{ code: string; name: string }>>([]);
  const [muiTheme, setMuiTheme] = useState<Theme | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Services
  const environmentDetector = EnvironmentDetector.getCurrentEnvironment();
  const databaseConfig = DATABASE_CONFIGS[environmentDetector];
  const themeService = new ThemeService(databaseConfig);

  // Charger les thèmes disponibles
  const loadAvailableThemes = async () => {
    try {
      const themes = await themeService.getAvailableThemes();
      setAvailableThemes(themes);
      return themes;
    } catch (err) {
      console.error('Erreur chargement thèmes:', err);
      setError('Erreur chargement des thèmes');
      return [];
    }
  };

  // Appliquer un thème
  const applyTheme = async (themeCode: string) => {
    try {
      setIsLoading(true);
      setError(null);

      await themeService.loadAndApplyTheme(themeCode);
      const currentTheme = themeService.getCurrentTheme();

      if (currentTheme) {
        const newMuiTheme = createTheme(currentTheme.definition);
        setMuiTheme(newMuiTheme);
        setCurrentTheme(themeCode);
      } else {
        throw new Error(`Thème ${themeCode} non trouvé`);
      }

      console.log(`✅ Thème "${themeCode}" appliqué`);
    } catch (err) {
      console.error('Erreur application thème:', err);
      setError(`Erreur application du thème: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Changer de thème
  const setTheme = async (themeCode: string) => {
    await applyTheme(themeCode);
  };

  // Rafraîchir les thèmes
  const refreshThemes = async () => {
    await loadAvailableThemes();
  };

  // Initialisation
  useEffect(() => {
    const initializeTheme = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Détecter l'environnement
        const environment = EnvironmentDetector.getCurrentEnvironment();
        console.log('🌍 Environnement détecté:', environment);

        // Charger les thèmes disponibles
        const themes = await loadAvailableThemes();

        // Sélectionner le thème par défaut ou le premier disponible
        let themeToApply = defaultTheme;
        if (!themes.find(t => t.code === themeToApply) && themes.length > 0) {
          themeToApply = themes[0].code;
        }

        // Appliquer le thème
        if (themeToApply) {
          await applyTheme(themeToApply);
        }

      } catch (err) {
        console.error('Erreur initialisation thème:', err);
        setError('Erreur initialisation des thèmes');
      } finally {
        setIsLoading(false);
      }
    };

    initializeTheme();
  }, []);

  const contextValue: ThemeContextProps = {
    currentTheme,
    availableThemes,
    isLoading,
    error,
    setTheme,
    refreshThemes,
    muiTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {muiTheme ? (
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      ) : (
        <div>Chargement des thèmes...</div>
      )}
    </ThemeContext.Provider>
  );
};