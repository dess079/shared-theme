import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientGray
 * Mode: dark
 */
export const gradientGrayTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(156, 163, 175)',
    },
    secondary: {
      main: 'rgb(75, 85, 99)',
    },
    error: {
      main: 'rgb(248, 113, 113)',
    },
    background: {
      default: 'rgb(31, 41, 55)',
      paper: 'rgb(55, 65, 81)',
    },
    text: {
      primary: 'rgb(243, 244, 246)',
      secondary: 'rgb(209, 213, 219)',
    },
    divider: 'rgb(75, 85, 99)',
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
