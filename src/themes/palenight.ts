import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: palenight
 * Mode: dark
 */
export const palenightTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(141, 153, 189)',
    },
    secondary: {
      main: 'rgb(29, 35, 51)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(18, 22, 32)',
      paper: 'rgb(24, 28, 42)',
    },
    text: {
      primary: 'rgb(216, 220, 232)',
      secondary: 'rgb(141, 153, 189)',
    },
    divider: 'rgb(33, 39, 58)',
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
