import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientSilver
 * Mode: light
 */
export const gradientSilverTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(100, 116, 139)',
    },
    secondary: {
      main: 'rgb(203, 213, 225)',
    },
    error: {
      main: 'rgb(220, 38, 38)',
    },
    background: {
      default: 'rgb(230, 235, 240)',
      paper: 'rgb(241, 245, 249)',
    },
    text: {
      primary: 'rgb(30, 41, 59)',
      secondary: 'rgb(71, 85, 105)',
    },
    divider: 'rgb(203, 213, 225)',
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
