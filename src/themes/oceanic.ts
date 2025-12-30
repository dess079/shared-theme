import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: oceanic
 * Mode: dark
 */
export const oceanicTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(25, 178, 255)',
    },
    secondary: {
      main: 'rgb(0, 50, 76)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(0, 27, 40)',
      paper: 'rgb(0, 40, 61)',
    },
    text: {
      primary: 'rgb(178, 229, 255)',
      secondary: 'rgb(76, 195, 254)',
    },
    divider: 'rgb(0, 61, 91)',
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
