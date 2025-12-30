import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: prism
 * Mode: light
 */
export const prismTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(187, 50, 255)',
    },
    secondary: {
      main: 'rgb(156, 163, 175)',
    },
    error: {
      main: 'rgb(238, 68, 68)',
    },
    background: {
      default: 'rgb(249, 249, 249)',
      paper: 'rgb(249, 249, 249)',
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
