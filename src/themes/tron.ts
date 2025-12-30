import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: tron
 * Mode: dark
 */
export const tronTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(50, 254, 255)',
    },
    secondary: {
      main: 'rgb(0, 61, 61)',
    },
    error: {
      main: 'rgb(255, 50, 50)',
    },
    background: {
      default: 'rgb(0, 25, 25)',
      paper: 'rgb(0, 40, 40)',
    },
    text: {
      primary: 'rgb(153, 254, 255)',
      secondary: 'rgb(50, 254, 255)',
    },
    divider: 'rgb(0, 101, 102)',
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
