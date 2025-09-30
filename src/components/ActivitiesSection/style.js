export const activitiesStyles = (theme, isVisible) => ({
  section: {
    py: 15,
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    px: 4
  },
  
  header: {
    textAlign: 'center',
    mb: 8,
    [theme.breakpoints.up('md')]: {
      mb: 12
    }
  },
  
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 2,
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem'
    }
  },
  
  accentLine: {
    height: 4,
    width: 96,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2,
    margin: '0 auto',
    mb: 4
  },
  
  subtitle: {
    fontSize: '1.125rem',
    color: theme.palette.text.secondary,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6
  },
  
  activitiesGrid: {
    display: 'grid',
    gap: 4,
    mb: 8,
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    },
    marginBotton:'80px',
  },
  
  activityItem: {
    transition: 'all 0.7s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
  },
  
  activityCard: {
    p: 4,
    height: '100%',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.card?.main || theme.palette.background.paper,
    border: 'none',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    '&:hover': {
      boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      transform: 'translateY(-8px)'
    }
  },
  
  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 2,
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
  
  activityTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 2,
    fontSize: '1.25rem'
  },
  
  activityDescription: {
    color: theme.palette.text.secondary,
    lineHeight: 1.5
  },
  
  featureGrid: {
    margin:'90px',
    display: 'grid',
    gap: 4,
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  
  featureCard: {
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: 'none',
    borderRadius: 2
  },
  
  featureImage: {
    width: '100%',
    height: 256,
    objectFit: 'cover',
    display: 'block'
  },
  
  featureContent: {
    p: 4
  },
  
  featureTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 2,
    fontSize: '1.5rem'
  },
  
  featureDescription: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6
  }
});