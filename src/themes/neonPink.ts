import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: neonPink
 * Mode: dark
 */
export const neonPinkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 20, 220)',
    },
    secondary: {
      main: 'rgb(60, 20, 80)',
    },
    error: {
      main: 'rgb(255, 100, 50)',
    },
    background: {
      default: 'rgb(15, 5, 20)',
      paper: 'rgb(25, 10, 35)',
    },
    text: {
      primary: 'rgb(255, 180, 250)',
      secondary: 'rgb(200, 120, 220)',
    },
    divider: 'rgb(80, 25, 100)',
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
