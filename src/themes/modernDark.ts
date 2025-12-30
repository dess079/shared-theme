import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: modernDark
 * Mode: dark
 */
export const modernDarkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(0, 230, 255)',
    },
    secondary: {
      main: 'rgb(45, 52, 70)',
    },
    error: {
      main: 'rgb(255, 65, 105)',
    },
    background: {
      default: 'rgb(10, 10, 15)',
      paper: 'rgb(18, 20, 28)',
    },
    text: {
      primary: 'rgb(240, 246, 252)',
      secondary: 'rgb(160, 174, 192)',
    },
    divider: 'rgb(35, 40, 55)',
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
