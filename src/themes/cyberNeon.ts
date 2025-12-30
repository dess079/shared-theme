import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: cyberNeon
 * Mode: dark
 */
export const cyberNeonTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 101, 254)',
    },
    secondary: {
      main: 'rgb(0, 0, 40)',
    },
    error: {
      main: 'rgb(127, 29, 29)',
    },
    background: {
      default: 'rgb(0, 0, 15)',
      paper: 'rgb(0, 0, 25)',
    },
    text: {
      primary: 'rgb(249, 249, 249)',
      secondary: 'rgb(76, 76, 254)',
    },
    divider: 'rgb(255, 0, 254)',
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
