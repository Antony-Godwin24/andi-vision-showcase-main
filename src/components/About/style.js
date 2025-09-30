export const aboutStyles = (theme, isVisible) => ({
  section: {
    py: 15,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      py: 20
    }
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    px: 4
  },
  
  gridContainer: {
    display: 'grid',
    gap: 8,
    alignItems: 'center',
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  },
  
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    transition: 'all 1s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-48px)'
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
  
  imageContent: {
    transition: 'all 1s ease 0.3s',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(48px)'
  },
  
  imageCard: {
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    border: 'none',
    borderRadius: 2
  },
  
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  }
});