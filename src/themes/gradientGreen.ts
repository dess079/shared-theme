import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientGreen
 * Mode: dark
 */
export const gradientGreenTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(52, 211, 153)',
    },
    secondary: {
      main: 'rgb(16, 185, 129)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(20, 60, 40)',
      paper: 'rgb(30, 85, 55)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(209, 250, 229)',
    },
    divider: 'rgb(16, 185, 129)',
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
