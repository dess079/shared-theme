import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientFire
 * Mode: dark
 */
export const gradientFireTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(251, 146, 60)',
    },
    secondary: {
      main: 'rgb(234, 88, 12)',
    },
    error: {
      main: 'rgb(220, 38, 38)',
    },
    background: {
      default: 'rgb(45, 10, 5)',
      paper: 'rgb(75, 20, 10)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(254, 215, 170)',
    },
    divider: 'rgb(234, 88, 12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.5rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
};
