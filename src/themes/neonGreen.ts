import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: neonGreen
 * Mode: dark
 */
export const neonGreenTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(57, 255, 20)',
    },
    secondary: {
      main: 'rgb(20, 60, 20)',
    },
    error: {
      main: 'rgb(255, 50, 50)',
    },
    background: {
      default: 'rgb(5, 15, 5)',
      paper: 'rgb(10, 25, 10)',
    },
    text: {
      primary: 'rgb(180, 255, 180)',
      secondary: 'rgb(120, 200, 120)',
    },
    divider: 'rgb(30, 80, 30)',
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
