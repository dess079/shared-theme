import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: dracula
 * Mode: dark
 */
export const draculaTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(189, 147, 249)',
    },
    secondary: {
      main: 'rgb(45, 48, 65)',
    },
    error: {
      main: 'rgb(255, 85, 85)',
    },
    background: {
      default: 'rgb(20, 21, 30)',
      paper: 'rgb(30, 32, 45)',
    },
    text: {
      primary: 'rgb(248, 248, 242)',
      secondary: 'rgb(180, 180, 170)',
    },
    divider: 'rgb(55, 58, 75)',
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
