import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: light
 * Mode: light
 */
export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(37, 99, 235)',
    },
    secondary: {
      main: 'rgb(241, 245, 249)',
    },
    error: {
      main: 'rgb(220, 38, 38)',
    },
    background: {
      default: 'rgb(250, 251, 252)',
      paper: 'rgb(255, 255, 255)',
    },
    text: {
      primary: 'rgb(30, 41, 59)',
      secondary: 'rgb(100, 116, 139)',
    },
    divider: 'rgb(226, 232, 240)',
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
