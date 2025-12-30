import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientPurple
 * Mode: dark
 */
export const gradientPurpleTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(168, 85, 247)',
    },
    secondary: {
      main: 'rgb(126, 34, 206)',
    },
    error: {
      main: 'rgb(244, 63, 94)',
    },
    background: {
      default: 'rgb(55, 25, 88)',
      paper: 'rgb(76, 40, 130)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(233, 213, 255)',
    },
    divider: 'rgb(147, 51, 234)',
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
