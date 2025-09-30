export const communityStyles = (theme, isVisible) => ({
  section: {
    py: 15,
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    px: 4
  },
  
  mainGrid: {
    display: 'grid',
    gap: 8,
    alignItems: 'center',
    mb: 8,
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  },
  
  imageContainer: {
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-48px)'
  },
  
  imageCard: {
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    border: 'none',
    borderRadius: 2
  },
  
  image: {
    width: '100%',
    height: 384,
    objectFit: 'cover',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      height: 384 // h-96 equivalent
    }
  },
  
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    transition: 'all 1s ease 0.3s',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(48px)'
  },
  
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  },
  
  accentLine: {
    height: 4,
    width: 96,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2
  },
  
  paragraph: {
    fontSize: '1.125rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6
  },
  
  initiativesGrid: {
    display: 'grid',
    gap: 4,
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  },
  
  initiativeItem: {
    transition: 'all 0.7s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
  },
  
  initiativeCard: {
    p: 4,
    height: '100%',
    transition: 'all 0.3s ease',
    border: 'none',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    '&:hover': {
      boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      transform: 'translateY(-8px)'
    }
  },
  
  initiativeIcon: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 3
  },
  
  icon: {
    color: theme.palette.accent?.foreground || theme.palette.common.white,
    fontSize: '1.5rem'
  },
  
  initiativeTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 2,
    fontSize: '1.25rem'
  },
  
  initiativeDescription: {
    color: theme.palette.text.secondary,
    lineHeight: 1.5
  }
});