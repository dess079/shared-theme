import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: material
 * Mode: dark
 */
export const materialTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(25, 140, 255)',
    },
    secondary: {
      main: 'rgb(0, 40, 81)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(0, 25, 51)',
      paper: 'rgb(0, 33, 66)',
    },
    text: {
      primary: 'rgb(204, 229, 254)',
      secondary: 'rgb(76, 165, 254)',
    },
    divider: 'rgb(0, 45, 91)',
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
