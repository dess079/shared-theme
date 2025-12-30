import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: synthwave
 * Mode: dark
 */
export const synthwaveTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 16, 240)',
    },
    secondary: {
      main: 'rgb(45, 20, 70)',
    },
    error: {
      main: 'rgb(255, 90, 20)',
    },
    background: {
      default: 'rgb(15, 5, 30)',
      paper: 'rgb(25, 10, 45)',
    },
    text: {
      primary: 'rgb(255, 180, 255)',
      secondary: 'rgb(200, 130, 220)',
    },
    divider: 'rgb(70, 30, 100)',
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
