import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: catppuccin
 * Mode: dark
 */
export const catppuccinTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(180, 190, 254)',
    },
    secondary: {
      main: 'rgb(35, 38, 52)',
    },
    error: {
      main: 'rgb(243, 139, 168)',
    },
    background: {
      default: 'rgb(17, 17, 27)',
      paper: 'rgb(24, 24, 37)',
    },
    text: {
      primary: 'rgb(205, 214, 244)',
      secondary: 'rgb(147, 154, 183)',
    },
    divider: 'rgb(49, 50, 68)',
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
