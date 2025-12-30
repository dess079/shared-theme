import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: cyberpunk
 * Mode: dark
 */
export const cyberpunkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 0, 255)',
    },
    secondary: {
      main: 'rgb(30, 15, 50)',
    },
    error: {
      main: 'rgb(255, 0, 100)',
    },
    background: {
      default: 'rgb(8, 8, 18)',
      paper: 'rgb(15, 15, 30)',
    },
    text: {
      primary: 'rgb(0, 255, 255)',
      secondary: 'rgb(100, 200, 220)',
    },
    divider: 'rgb(50, 0, 100)',
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
