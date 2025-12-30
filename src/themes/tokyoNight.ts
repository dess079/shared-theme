import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: tokyoNight
 * Mode: dark
 */
export const tokyoNightTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(158, 134, 200)',
    },
    secondary: {
      main: 'rgb(36, 37, 53)',
    },
    error: {
      main: 'rgb(247, 118, 142)',
    },
    background: {
      default: 'rgb(18, 18, 29)',
      paper: 'rgb(24, 25, 38)',
    },
    text: {
      primary: 'rgb(192, 202, 245)',
      secondary: 'rgb(130, 150, 200)',
    },
    divider: 'rgb(45, 46, 65)',
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
