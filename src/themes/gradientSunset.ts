import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientSunset
 * Mode: dark
 */
export const gradientSunsetTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(251, 146, 60)',
    },
    secondary: {
      main: 'rgb(244, 63, 94)',
    },
    error: {
      main: 'rgb(220, 38, 38)',
    },
    background: {
      default: 'rgb(55, 25, 45)',
      paper: 'rgb(80, 35, 65)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(250, 232, 255)',
    },
    divider: 'rgb(217, 70, 239)',
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
