export const contactStyles = (theme) => ({
  section: {
    position: 'relative',
    overflow: 'hidden',
    py: { xs: 12, md: 18 },
    px: 0,
    background: `radial-gradient(ellipse at 60% 40%, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 80%, ${theme.palette.primary.main} 100%)`,
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  decorativeCircle1: {
    position: 'absolute',
    zIndex: 1,
    width: 480,
    height: 480,
    top: '-180px',
    right: '-180px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    background: theme.palette.secondary.main,
    opacity: 0.25,
    pointerEvents: 'none'
  },
  decorativeCircle2: {
    position: 'absolute',
    zIndex: 1,
    width: 350,
    height: 350,
    bottom: '-120px',
    left: '-120px',
    borderRadius: '50%',
    filter: 'blur(100px)',
    background: theme.palette.primary.dark,
    opacity: 0.18,
    pointerEvents: 'none'
  },

  container: {
    position: 'relative',
    zIndex: 5,
    maxWidth: '1200px',
    margin: '0 auto',
    px: 2
  },

  content: {
    textAlign: 'center',
    pb: 6
  },

  title: {
    fontWeight: 700,
    fontSize: { xs: '2.3rem', md: '2.8rem' },
    color: theme.palette.common.white,
    mb: 3
  },

  accentLine: {
    height: 4,
    width: 80,
    borderRadius: 2,
    mb: 4,
    margin: '0 auto',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
  },

  subtitle: {
    color: theme.palette.common.white,
    opacity: 0.85,
    fontSize: '1.15rem',
    mb: 7,
    fontWeight: 400
  },

  contactCard: {
    background: 'rgba(61, 69, 115, 0.65)', // Frosted glass effect
    boxShadow: '0 8px 40px rgba(29, 33, 43, 0.30)',
    backdropFilter: 'blur(10px)',
    borderRadius: '18px',
    border: '1.5px solid rgba(120, 130, 200, 0.18)',
    px: { xs: 2, sm: 8 },
    py: { xs: 5, sm: 7 },
    maxWidth: 900,
    mx: 'auto',
    mt: 4
  },

  contactGrid: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 5, sm: 0 }
  },

  contactSection: {
    width: { xs: '100%', sm: '50%' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', sm: 'flex-start' },
    textAlign: { xs: 'center', sm: 'left' },
    mb: { xs: 5, sm: 0 }
  },
  sectionTitle: {
    fontSize: '1.55rem',
    fontWeight: 700,
    color: theme.palette.common.white,
    mb: 2
  },

  contactLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    color: theme.palette.common.white,
    textDecoration: 'none',
    px: 0,
    py: 0.7,
    '&:hover': {
      color: theme.palette.secondary.light,
      textDecoration: 'underline'
    }
  },
  linkIcon: {
    color: theme.palette.primary.main,
    fontSize: '1.3rem'
  },
  linkText: {
    fontSize: '1.1rem',
    fontWeight: 400
  },

  socialSection: {
    width: { xs: '100%', sm: '50%' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', sm: 'flex-end' },
    textAlign: { xs: 'center', sm: 'right' }
  },

  socialButtons: {
    display: 'flex',
    gap: 2,
    mt: 2
  },

  socialButton: {
    minWidth: 44,
    minHeight: 44,
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.08)',
    color: theme.palette.common.white,
    borderColor: 'rgba(180, 180, 255, 0.18)',
    transition: 'all 0.2s',
    boxShadow: '0 2px 18px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      borderColor: theme.palette.secondary.main
    }
  },
  socialIcon: {
    fontSize: '1.35rem'
  }
});
