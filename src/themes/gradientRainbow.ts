import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientRainbow
 * Mode: light
 */
export const gradientRainbowTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(219, 39, 119)',
    },
    secondary: {
      main: 'rgb(241, 245, 249)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(250, 250, 250)',
      paper: 'rgb(255, 255, 255)',
    },
    text: {
      primary: 'rgb(20, 20, 20)',
      secondary: 'rgb(100, 116, 139)',
    },
    divider: 'rgb(226, 232, 240)',
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
