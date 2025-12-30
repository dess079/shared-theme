import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: matrix
 * Mode: dark
 */
export const matrixTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(0, 255, 0)',
    },
    secondary: {
      main: 'rgb(0, 30, 0)',
    },
    error: {
      main: 'rgb(255, 50, 50)',
    },
    background: {
      default: 'rgb(0, 0, 0)',
      paper: 'rgb(5, 10, 5)',
    },
    text: {
      primary: 'rgb(0, 255, 65)',
      secondary: 'rgb(0, 180, 50)',
    },
    divider: 'rgb(0, 100, 30)',
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
