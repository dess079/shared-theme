import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientOrange
 * Mode: dark
 */
export const gradientOrangeTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(249, 115, 22)',
    },
    secondary: {
      main: 'rgb(234, 88, 12)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(90, 40, 10)',
      paper: 'rgb(130, 60, 20)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(254, 243, 199)',
    },
    divider: 'rgb(234, 88, 12)',
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
