import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: nord
 * Mode: dark
 */
export const nordTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(136, 192, 208)',
    },
    secondary: {
      main: 'rgb(46, 52, 64)',
    },
    error: {
      main: 'rgb(191, 97, 106)',
    },
    background: {
      default: 'rgb(22, 25, 32)',
      paper: 'rgb(29, 33, 42)',
    },
    text: {
      primary: 'rgb(216, 222, 233)',
      secondary: 'rgb(156, 172, 195)',
    },
    divider: 'rgb(59, 66, 82)',
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
