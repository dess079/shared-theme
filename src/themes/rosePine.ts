import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: rosePine
 * Mode: dark
 */
export const rosePineTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(219, 112, 147)',
    },
    secondary: {
      main: 'rgb(30, 30, 46)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(16, 16, 24)',
      paper: 'rgb(24, 24, 37)',
    },
    text: {
      primary: 'rgb(217, 217, 230)',
      secondary: 'rgb(147, 147, 184)',
    },
    divider: 'rgb(36, 36, 55)',
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
