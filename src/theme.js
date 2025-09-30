// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'

    // Custom 'accent' colors for CTA, highlights, etc.
    accent: {
      main: '#FF6F61',
      dark: '#CC554C',
      contrastText: '#FFFFFF',
    },

    // Card backgrounds for sections, profile, etc.
    card: {
      main: '#F7F9FC', // very light gray
      contrastText: '#222222', // readable on card bg
    },

    // Main branding colors
    primary: {
      main: '#1976d2',
      dark: '#115293',
      light: '#4791db',
      contrastText: '#ffffff',
    },

    secondary: {
      main: '#9c27b0',
      dark: '#6d1b7b',
      light: '#d05ce3',
      contrastText: '#ffffff',
    },

    // Standard surface/background
    background: {
      default: '#F5F5FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2233',
      secondary: '#6E7B8A',
    },
    // Others for completeness (divider, etc.)
    divider: '#E3E5EC',
  },

  // Optional: custom typography for headings/buttons consistency
  typography: {
    fontFamily: `"Inter", "Roboto", "Arial", sans-serif`,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      '@media (min-width:600px)': {
        fontSize: '5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 400,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    button: {
      fontWeight: 700,
      fontSize: '1.125rem',
      textTransform: 'none',
    },
  },
});

export default theme;
