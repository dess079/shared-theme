import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: glass
 * Mode: light
 */
export const glassTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(35, 98, 234)',
    },
    secondary: {
      main: 'rgb(156, 163, 175)',
    },
    error: {
      main: 'rgb(238, 68, 68)',
    },
    background: {
      default: 'rgb(243, 244, 246)',
      paper: 'rgb(243, 244, 246)',
    },
    text: {
      primary: 'rgb(1, 8, 22)',
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
