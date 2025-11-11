import { createTheme, ThemeOptions } from '@mui/material/styles';

/**
 * FOMO Design System - MUI Theme
 * 
 * Tema personalizado minimalista y moderno para Material-UI
 * Basado en los colores principales de FOMO: #F95F2E (Naranja) y #736CED (Púrpura)
 */

const themeOptions: ThemeOptions = {
  // ============================================
  // PALETA DE COLORES
  // ============================================
  palette: {
    mode: 'light',
    primary: {
      main: '#F95F2E',
      light: '#FF7A4D',
      dark: '#E54718',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#736CED',
      light: '#9088F2',
      dark: '#5B54D9',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4757',
      light: '#FF6B7A',
      dark: '#E63946',
    },
    warning: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
    },
    info: {
      main: '#736CED',
      light: '#9088F2',
      dark: '#5B54D9',
    },
    success: {
      main: '#20C997',
      light: '#4DD4AC',
      dark: '#1AA179',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D2A29',
      secondary: '#6C757D',
      disabled: '#ADB5BD',
    },
    divider: '#E9ECEF',
    grey: {
      50: '#F8F9FA',
      100: '#F1F3F5',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#2D2A29',
    },
  },

  // ============================================
  // TIPOGRAFÍA
  // ============================================
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },

  // ============================================
  // FORMA Y BORDES
  // ============================================
  shape: {
    borderRadius: 12,
  },

  // ============================================
  // SOMBRAS PERSONALIZADAS
  // ============================================
  shadows: [
    'none',
    '0 1px 3px rgba(45, 42, 41, 0.08)',
    '0 2px 4px rgba(45, 42, 41, 0.08)',
    '0 4px 6px rgba(45, 42, 41, 0.1)',
    '0 6px 12px rgba(45, 42, 41, 0.1)',
    '0 8px 16px rgba(45, 42, 41, 0.12)',
    '0 10px 20px rgba(45, 42, 41, 0.12)',
    '0 12px 24px rgba(45, 42, 41, 0.14)',
    '0 16px 32px rgba(45, 42, 41, 0.14)',
    '0 20px 40px rgba(45, 42, 41, 0.15)',
    '0 24px 48px rgba(45, 42, 41, 0.16)',
    ...Array(14).fill('0 24px 48px rgba(45, 42, 41, 0.16)'),
  ] as any,

  // ============================================
  // COMPONENTES PERSONALIZADOS
  // ============================================
  components: {
    // BOTONES
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          fontWeight: 500,
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(45, 42, 41, 0.12)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 16px rgba(45, 42, 41, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #F95F2E 0%, #FF7A4D 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF7A4D 0%, #FF9670 100%)',
            boxShadow: '0 6px 20px rgba(249, 95, 46, 0.3)',
          },
        },
        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: 'rgba(249, 95, 46, 0.04)',
          },
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.875rem',
        },
        sizeLarge: {
          padding: '12px 32px',
          fontSize: '1rem',
        },
      },
    },

    // CARDS
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(45, 42, 41, 0.06)',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid #F1F3F5',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(45, 42, 41, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },

    // PAPER
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(45, 42, 41, 0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(45, 42, 41, 0.08)',
        },
        elevation3: {
          boxShadow: '0 8px 16px rgba(45, 42, 41, 0.1)',
        },
      },
    },

    // INPUTS
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F95F2E',
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: 2,
                borderColor: '#F95F2E',
              },
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#F8F9FA',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F95F2E',
            },
          },
          '&.Mui-focused': {
            backgroundColor: '#FFFFFF',
          },
        },
        notchedOutline: {
          borderColor: '#E9ECEF',
        },
      },
    },

    // CHIPS
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.875rem',
        },
        filled: {
          backgroundColor: '#F1F3F5',
          '&:hover': {
            backgroundColor: '#E9ECEF',
          },
        },
      },
    },

    // TABS
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.9375rem',
          minHeight: 48,
          padding: '12px 24px',
          '&.Mui-selected': {
            color: '#F95F2E',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
          backgroundColor: '#F95F2E',
        },
      },
    },

    // TOOLTIPS
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#2D2A29',
          borderRadius: 8,
          padding: '8px 12px',
          fontSize: '0.875rem',
        },
        arrow: {
          color: '#2D2A29',
        },
      },
    },

    // DIALOG
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          boxShadow: '0 20px 60px rgba(45, 42, 41, 0.2)',
        },
      },
    },

    // APPBAR
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(45, 42, 41, 0.08)',
          backgroundColor: '#FFFFFF',
          color: '#2D2A29',
        },
      },
    },

    // DIVIDER
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E9ECEF',
        },
      },
    },

    // ALERT
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 16px',
          fontSize: '0.9375rem',
        },
        filledSuccess: {
          backgroundColor: '#20C997',
        },
        filledError: {
          backgroundColor: '#FF4757',
        },
        filledWarning: {
          backgroundColor: '#FFC107',
        },
        filledInfo: {
          backgroundColor: '#736CED',
        },
        standardSuccess: {
          backgroundColor: '#E6FCF5',
          color: '#1AA179',
        },
        standardError: {
          backgroundColor: '#FFE9EC',
          color: '#E63946',
        },
        standardWarning: {
          backgroundColor: '#FFF9E6',
          color: '#FFA000',
        },
        standardInfo: {
          backgroundColor: '#F0EEFF',
          color: '#5B54D9',
        },
      },
    },

    // SWITCH
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        track: {
          borderRadius: 22 / 2,
          backgroundColor: '#E9ECEF',
        },
        thumb: {
          boxShadow: '0 2px 4px rgba(45, 42, 41, 0.2)',
        },
      },
    },

    // CHECKBOX & RADIO
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ADB5BD',
          '&.Mui-checked': {
            color: '#F95F2E',
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#ADB5BD',
          '&.Mui-checked': {
            color: '#F95F2E',
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

// Exportar también las variables de color para uso directo
export const colors = {
  primary: '#F95F2E',
  primaryLight: '#FF7A4D',
  primaryDark: '#E54718',
  secondary: '#736CED',
  secondaryLight: '#9088F2',
  secondaryDark: '#5B54D9',
  dark: '#2D2A29',
  textPrimary: '#2D2A29',
  textSecondary: '#6C757D',
  textDisabled: '#ADB5BD',
  bgLight: '#F8F9FA',
  bgMedium: '#F1F3F5',
  divider: '#E9ECEF',
};

export default theme;
