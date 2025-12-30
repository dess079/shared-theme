import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientNeutral
 * Mode: dark
 */
export const gradientNeutralTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(163, 163, 163)',
    },
    secondary: {
      main: 'rgb(115, 115, 115)',
    },
    error: {
      main: 'rgb(248, 113, 113)',
    },
    background: {
      default: 'rgb(38, 38, 38)',
      paper: 'rgb(64, 64, 64)',
    },
    text: {
      primary: 'rgb(250, 250, 250)',
      secondary: 'rgb(212, 212, 212)',
    },
    divider: 'rgb(115, 115, 115)',
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
