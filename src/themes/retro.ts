import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: retro
 * Mode: dark
 */
export const retroTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 204, 50)',
    },
    secondary: {
      main: 'rgb(61, 45, 0)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(25, 19, 0)',
      paper: 'rgb(40, 30, 0)',
    },
    text: {
      primary: 'rgb(255, 235, 178)',
      secondary: 'rgb(254, 210, 76)',
    },
    divider: 'rgb(76, 57, 0)',
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
