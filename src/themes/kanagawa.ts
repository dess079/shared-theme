import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: kanagawa
 * Mode: dark
 */
export const kanagawaTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(226, 97, 54)',
    },
    secondary: {
      main: 'rgb(47, 33, 28)',
    },
    error: {
      main: 'rgb(254, 86, 86)',
    },
    background: {
      default: 'rgb(25, 17, 15)',
      paper: 'rgb(38, 26, 22)',
    },
    text: {
      primary: 'rgb(232, 220, 216)',
      secondary: 'rgb(188, 154, 143)',
    },
    divider: 'rgb(57, 40, 34)',
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
