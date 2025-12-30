import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: cosmic
 * Mode: dark
 */
export const cosmicTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(147, 51, 234)',
    },
    secondary: {
      main: 'rgb(25, 25, 60)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(5, 5, 25)',
      paper: 'rgb(12, 12, 38)',
    },
    text: {
      primary: 'rgb(230, 230, 255)',
      secondary: 'rgb(140, 140, 200)',
    },
    divider: 'rgb(45, 45, 90)',
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
