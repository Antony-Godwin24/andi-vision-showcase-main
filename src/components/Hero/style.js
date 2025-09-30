export const heroStyles = (theme, scrollY) => ({
  section: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  
  parallaxBackground: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    transform: `translateY(${scrollY * 0.5}px)`,
    transition: 'transform 0.1s ease-out'
  },
  
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  
  backgroundOverlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    opacity: 0.8
  },
  
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    px: 4,
    textAlign: 'center',
    color: theme.palette.primary.contrastText
  },
  
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    mb: 4,
    animation: 'fadeInUp 1s ease-out',
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem'
    }
  },
  
  accentLine: {
    height: 4,
    width: 128,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2,
    margin: '0 auto',
    mb: 4,
    animation: 'scaleIn 1s ease-out 0.2s both'
  },
  
  subtitle1: {
    fontSize: '1.5rem',
    mb: 2,
    animation: 'fadeInUp 1s ease-out 0.2s both',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.25rem'
    }
  },
  
  subtitle2: {
    fontSize: '1.125rem',
    color: theme.palette.primary.contrastText + 'E6',
    mb: 6,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    animation: 'fadeInUp 1s ease-out 0.4s both',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem'
    }
  },
  
  ctaButton: {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: theme.palette.accent?.foreground || theme.palette.common.white,
    padding: '12px 32px',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    animation: 'fadeInUp 1s ease-out 0.6s both',
    '&:hover': {
      boxShadow: '0 6px 30px rgba(0,0,0,0.3)',
      transform: 'translateY(-2px)'
    }
  },
  
  scrollIndicator: {
    position: 'absolute',
    bottom: 32,
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'float 3s ease-in-out infinite'
  },
  
  scrollContainer: {
    width: 24,
    height: 40,
    border: `2px solid ${theme.palette.primary.contrastText}80`,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 2
  },
  
  scrollDot: {
    width: 6,
    height: 12,
    backgroundColor: theme.palette.primary.contrastText + '80',
    borderRadius: '3px',
    animation: 'pulse 2s infinite'
  },
  
  // Animations
  '@global': {
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translateY(30px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    },
    
    '@keyframes scaleIn': {
      from: {
        opacity: 0,
        transform: 'scaleX(0)'
      },
      to: {
        opacity: 1,
        transform: 'scaleX(1)'
      }
    },
    
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateX(-50%) translateY(0px)'
      },
      '50%': {
        transform: 'translateX(-50%) translateY(-10px)'
      }
    },
    
    '@keyframes pulse': {
      '0%, 100%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.5
      }
    }
  }
});