import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: monokai
 * Mode: dark
 */
export const monokaiTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(174, 129, 255)',
    },
    secondary: {
      main: 'rgb(45, 45, 40)',
    },
    error: {
      main: 'rgb(249, 38, 114)',
    },
    background: {
      default: 'rgb(23, 23, 19)',
      paper: 'rgb(32, 32, 28)',
    },
    text: {
      primary: 'rgb(248, 248, 240)',
      secondary: 'rgb(180, 180, 160)',
    },
    divider: 'rgb(58, 58, 50)',
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
