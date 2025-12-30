import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: oneDark
 * Mode: dark
 */
export const oneDarkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(97, 175, 239)',
    },
    secondary: {
      main: 'rgb(35, 39, 48)',
    },
    error: {
      main: 'rgb(224, 108, 117)',
    },
    background: {
      default: 'rgb(18, 20, 26)',
      paper: 'rgb(25, 28, 35)',
    },
    text: {
      primary: 'rgb(230, 235, 243)',
      secondary: 'rgb(152, 166, 192)',
    },
    divider: 'rgb(44, 49, 60)',
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
