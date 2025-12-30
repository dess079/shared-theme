import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: solarized
 * Mode: dark
 */
export const solarizedTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(181, 137, 0)',
    },
    secondary: {
      main: 'rgb(7, 54, 66)',
    },
    error: {
      main: 'rgb(220, 50, 47)',
    },
    background: {
      default: 'rgb(0, 30, 40)',
      paper: 'rgb(7, 44, 59)',
    },
    text: {
      primary: 'rgb(238, 242, 243)',
      secondary: 'rgb(147, 161, 161)',
    },
    divider: 'rgb(7, 68, 88)',
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
