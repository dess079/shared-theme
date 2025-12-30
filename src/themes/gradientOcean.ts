import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientOcean
 * Mode: dark
 */
export const gradientOceanTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(6, 182, 212)',
    },
    secondary: {
      main: 'rgb(14, 116, 144)',
    },
    error: {
      main: 'rgb(248, 113, 113)',
    },
    background: {
      default: 'rgb(8, 28, 48)',
      paper: 'rgb(12, 42, 70)',
    },
    text: {
      primary: 'rgb(224, 242, 254)',
      secondary: 'rgb(165, 243, 252)',
    },
    divider: 'rgb(14, 116, 144)',
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
