import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: hologram
 * Mode: dark
 */
export const hologramTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(50, 254, 255)',
    },
    secondary: {
      main: 'rgb(156, 163, 175)',
    },
    error: {
      main: 'rgb(127, 29, 29)',
    },
    background: {
      default: 'rgb(0, 13, 20)',
      paper: 'rgb(0, 13, 20)',
    },
    text: {
      primary: 'rgb(153, 254, 255)',
      secondary: 'rgb(76, 195, 254)',
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
