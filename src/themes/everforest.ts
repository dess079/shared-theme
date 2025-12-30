import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: everforest
 * Mode: dark
 */
export const everforestTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(148, 191, 88)',
    },
    secondary: {
      main: 'rgb(39, 45, 30)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(21, 24, 16)',
      paper: 'rgb(31, 36, 24)',
    },
    text: {
      primary: 'rgb(225, 230, 218)',
      secondary: 'rgb(168, 183, 147)',
    },
    divider: 'rgb(47, 55, 36)',
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
