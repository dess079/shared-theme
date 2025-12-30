import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gruvbox
 * Mode: dark
 */
export const gruvboxTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(250, 189, 47)',
    },
    secondary: {
      main: 'rgb(60, 48, 38)',
    },
    error: {
      main: 'rgb(251, 73, 52)',
    },
    background: {
      default: 'rgb(29, 24, 18)',
      paper: 'rgb(40, 32, 25)',
    },
    text: {
      primary: 'rgb(235, 219, 178)',
      secondary: 'rgb(189, 174, 147)',
    },
    divider: 'rgb(80, 64, 51)',
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
