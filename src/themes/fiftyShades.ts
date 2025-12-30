import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: fiftyShades
 * Mode: dark
 */
export const fiftyShadesTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(204, 204, 204)',
    },
    secondary: {
      main: 'rgb(51, 51, 51)',
    },
    error: {
      main: 'rgb(238, 68, 68)',
    },
    background: {
      default: 'rgb(20, 20, 20)',
      paper: 'rgb(30, 30, 30)',
    },
    text: {
      primary: 'rgb(242, 242, 242)',
      secondary: 'rgb(178, 178, 178)',
    },
    divider: 'rgb(51, 51, 51)',
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
