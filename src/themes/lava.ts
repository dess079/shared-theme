import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: lava
 * Mode: dark
 */
export const lavaTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(255, 101, 50)',
    },
    secondary: {
      main: 'rgb(76, 19, 0)',
    },
    error: {
      main: 'rgb(127, 29, 29)',
    },
    background: {
      default: 'rgb(40, 10, 0)',
      paper: 'rgb(51, 12, 0)',
    },
    text: {
      primary: 'rgb(249, 249, 249)',
      secondary: 'rgb(254, 121, 76)',
    },
    divider: 'rgb(102, 25, 0)',
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
