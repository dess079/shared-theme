import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: githubDark
 * Mode: dark
 */
export const githubDarkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(88, 166, 255)',
    },
    secondary: {
      main: 'rgb(48, 54, 61)',
    },
    error: {
      main: 'rgb(248, 81, 73)',
    },
    background: {
      default: 'rgb(13, 17, 23)',
      paper: 'rgb(22, 27, 34)',
    },
    text: {
      primary: 'rgb(230, 237, 243)',
      secondary: 'rgb(139, 148, 158)',
    },
    divider: 'rgb(48, 54, 61)',
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
