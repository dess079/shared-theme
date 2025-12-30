import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientSlate
 * Mode: dark
 */
export const gradientSlateTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(148, 163, 184)',
    },
    secondary: {
      main: 'rgb(51, 65, 85)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(15, 23, 42)',
      paper: 'rgb(30, 41, 59)',
    },
    text: {
      primary: 'rgb(241, 245, 249)',
      secondary: 'rgb(148, 163, 184)',
    },
    divider: 'rgb(51, 65, 85)',
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
