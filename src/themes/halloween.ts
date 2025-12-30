import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: halloween
 * Mode: dark
 */
export const halloweenTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 191, 0)',
    },
    secondary: {
      main: 'rgb(38, 38, 38)',
    },
    error: {
      main: 'rgb(255, 0, 0)',
    },
    background: {
      default: 'rgb(12, 12, 12)',
      paper: 'rgb(25, 25, 25)',
    },
    text: {
      primary: 'rgb(255, 204, 50)',
      secondary: 'rgb(216, 197, 140)',
    },
    divider: 'rgb(51, 51, 51)',
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
