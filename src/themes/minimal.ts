import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: minimal
 * Mode: light
 */
export const minimalTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(51, 51, 51)',
    },
    secondary: {
      main: 'rgb(242, 242, 242)',
    },
    error: {
      main: 'rgb(238, 68, 68)',
    },
    background: {
      default: 'rgb(249, 249, 249)',
      paper: 'rgb(255, 255, 255)',
    },
    text: {
      primary: 'rgb(25, 25, 25)',
      secondary: 'rgb(114, 114, 114)',
    },
    divider: 'rgb(216, 216, 216)',
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
