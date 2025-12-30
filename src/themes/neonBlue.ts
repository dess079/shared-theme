import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: neonBlue
 * Mode: dark
 */
export const neonBlueTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(0, 214, 255)',
    },
    secondary: {
      main: 'rgb(20, 45, 80)',
    },
    error: {
      main: 'rgb(255, 45, 85)',
    },
    background: {
      default: 'rgb(5, 12, 25)',
      paper: 'rgb(10, 20, 40)',
    },
    text: {
      primary: 'rgb(180, 233, 255)',
      secondary: 'rgb(120, 180, 220)',
    },
    divider: 'rgb(25, 60, 100)',
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
