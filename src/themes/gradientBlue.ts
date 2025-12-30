import { ThemeOptions } from '@mui/material/styles';

/**
 * Thème MUI: gradientBlue
 * Mode: dark
 */
export const gradientBlueTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(59, 130, 246)',
    },
    secondary: {
      main: 'rgb(30, 64, 175)',
    },
    error: {
      main: 'rgb(239, 68, 68)',
    },
    background: {
      default: 'rgb(15, 52, 96)',
      paper: 'rgb(25, 70, 130)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(191, 219, 254)',
    },
    divider: 'rgb(37, 99, 235)',
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
