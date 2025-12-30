import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientPink
 * Mode: dark
 */
export const gradientPinkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(236, 72, 153)',
    },
    secondary: {
      main: 'rgb(219, 39, 119)',
    },
    error: {
      main: 'rgb(244, 63, 94)',
    },
    background: {
      default: 'rgb(112, 26, 71)',
      paper: 'rgb(157, 40, 100)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(251, 207, 232)',
    },
    divider: 'rgb(219, 39, 119)',
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
