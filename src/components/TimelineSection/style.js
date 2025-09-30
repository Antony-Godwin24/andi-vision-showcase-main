export const timelineStyles = (theme) => ({
  section: {
    py: 15,
    [theme.breakpoints.up('md')]: {
      py: 20
    }
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
    margin: '0 auto'
  },

  timelineContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },

  timelineItem: {
    transition: 'all 0.7s ease'
  },

  visible: {
    opacity: 1,
    transform: 'translateX(0)'
  },

  hiddenLeft: {
    opacity: 0,
    transform: 'translateX(-48px)'
  },

  hiddenRight: {
    opacity: 0,
    transform: 'translateX(48px)'
  },

  // --- THIS IS THE MAIN CARD STYLE UPDATED ---
  timelineCard: {
    p: 4,
    transition: 'all 0.3s ease',
    border: 'none',
    borderRadius: '20px', // Soft-rounded corners
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    background: theme.palette.background.paper,
    '&:hover': {
      boxShadow: '0 8px 32px rgba(0,0,0,0.13)'
    }
  },

  cardContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 3
  },

  iconContainer: {
    flexShrink: 0
  },

  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon: {
    color: theme.palette.accent?.contrastText || theme.palette.common.white,
    fontSize: '1.5rem'
  },

  textContent: {
    flexGrow: 1
  },

  yearContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    mb: 2
  },

  year: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '1.25rem'
  },

  divider: {
    height: 1,
    flexGrow: 1,
    backgroundColor: theme.palette.divider
  },

  itemTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    mb: 2,
    fontSize: '1.25rem'
  },

  itemDescription: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6
  }
});
