import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientStone
 * Mode: dark
 */
export const gradientStoneTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(168, 162, 158)',
    },
    secondary: {
      main: 'rgb(87, 83, 78)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(41, 37, 36)',
      paper: 'rgb(68, 64, 60)',
    },
    text: {
      primary: 'rgb(250, 250, 249)',
      secondary: 'rgb(214, 211, 209)',
    },
    divider: 'rgb(87, 83, 78)',
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
