/**
 * Composant principal ThemeSelector
 * Point d'entrée unique de la bibliothèque
 */

import React, { useState, useEffect } from 'react';
import { IconButton, Popover, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, Box, Typography, CircularProgress } from '@mui/material';

import { Theme, DATABASE_CONFIGS } from '../types/theme.types';
import { EnvironmentDetector } from '../services/environmentDetector';
import { ThemeService } from '../services/themeService';

interface ThemeSelectorProps {
  icons?: {
    palette?: React.ComponentType<any>;
    expandMore?: React.ComponentType<any>;
    check?: React.ComponentType<any>;
    error?: React.ComponentType<any>;
  };
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  icons = {}
}) => {
  // Icônes par défaut (seront passées par les apps)
  const PaletteIcon = icons.palette || (() => <span>🎨</span>);
  const ChevronDownIcon = icons.expandMore || (() => <span>▼</span>);
  const CheckIcon = icons.check || (() => <span>✓</span>);
  const ErrorIcon = icons.error || (() => <span>⚠️</span>);
  // Détection automatique d'environnement
  const [environment] = useState(() => EnvironmentDetector.getCurrentEnvironment());
  const [dbConfig] = useState(() => DATABASE_CONFIGS[environment]);

  // Services et état
  const [themeService] = useState(() => new ThemeService(dbConfig));
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // Chargement initial
  useEffect(() => {
    initializeThemeSystem();
  }, []);

  const initializeThemeSystem = async () => {
    try {
      setError(null);
      await themeService.initialize();
      const availableThemes = await themeService.getAvailableThemes();
      setThemes(availableThemes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur chargement thèmes');
    } finally {
      setLoading(false);
    }
  };

  const handleThemeSelect = async (code: string) => {
    try {
      setError(null);
      await themeService.loadAndApplyTheme(code);
      setAnchorEl(null); // Fermer le dropdown
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur application thème');
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const currentTheme = themeService.getCurrentTheme();

  // État de chargement
  if (loading) {
    return (
      <Tooltip title="Chargement des thèmes...">
        <IconButton disabled>
          <CircularProgress size={20} />
        </IconButton>
      </Tooltip>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <Tooltip title={`Erreur: ${error}`}>
        <IconButton disabled>
          <ErrorIcon />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Box>
      <Tooltip title={currentTheme ? `Thème: ${currentTheme.name}` : 'Sélecteur de thème'}>
        <IconButton
          size="small"
          onClick={handleClick}
          aria-expanded={open}
          aria-haspopup="listbox"
          sx={{ p: 0.5 }}
        >
          <PaletteIcon sx={{ fontSize: 20 }} />
          <ChevronDownIcon sx={{ fontSize: 20, ml: 0.5 }} />
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            width: 288,
            maxHeight: '75vh',
            mt: 1,
          }
        }}
      >
        {/* Thème actuel */}
        {currentTheme && (
          <Box
            sx={{
              px: 2,
              py: 1.5,
              borderBottom: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <PaletteIcon sx={{ fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 600, flexGrow: 1 }}>
              Thème: {currentTheme.name}
            </Typography>
            <CheckIcon sx={{ fontSize: 20 }} />
          </Box>
        )}

        {/* Liste des thèmes */}
        <List
          sx={{
            py: 0.5,
            overflowY: 'auto',
            maxHeight: 'calc(75vh - 56px)',
          }}
        >
          {themes.map((theme) => (
            <ListItemButton
              key={theme.code}
              onClick={() => handleThemeSelect(theme.code)}
              selected={currentTheme?.code === theme.code}
              sx={{
                py: 1,
                px: 2,
                gap: 1,
                '&.Mui-selected': {
                  fontWeight: 600,
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <PaletteIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={theme.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: currentTheme?.code === theme.code ? 600 : 500
                }}
              />
              {currentTheme?.code === theme.code && (
                <CheckIcon sx={{ fontSize: 20 }} />
              )}
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
};