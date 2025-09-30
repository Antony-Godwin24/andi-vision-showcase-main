import React from 'react';
import {
  Card,
  Typography,
  Box,
  Button,
  useTheme
} from '@mui/material';
import {
  Email,
  LinkedIn,
  Twitter,
  Language
} from '@mui/icons-material';
import { contactStyles } from './style';

export const ContactSection = () => {
  const theme = useTheme();
  const styles = contactStyles(theme);

  return (
    <Box component="section" sx={styles.section}>
      {/* Decorative elements */}
      <Box sx={styles.decorativeCircle1} />
      <Box sx={styles.decorativeCircle2} />

      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            Let's Connect
          </Typography>
          <Box sx={styles.accentLine} />
          <Typography variant="body1" sx={styles.subtitle}>
            Interested in collaboration, speaking engagements, or just want to
            chat about technology and innovation? I'd love to hear from you.
          </Typography>

          <Card sx={styles.contactCard}>
            <Box sx={styles.contactGrid}>
              {/* Get in Touch */}
              <Box sx={styles.contactSection}>
                <Typography variant="h4" component="h3" sx={styles.sectionTitle}>
                  Get in Touch
                </Typography>
                <Box sx={styles.contactLinks}>
                  <Box
                    component="a"
                    href="mailto:andi@softsquare.com"
                    sx={styles.contactLink}
                  >
                    <Email sx={styles.linkIcon} />
                    <Typography variant="body1" sx={styles.linkText}>
                      andi@softsquare.com
                    </Typography>
                  </Box>
                  <Box
                    component="a"
                    href="https://www.softsquare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.contactLink}
                  >
                    <Language sx={styles.linkIcon} />
                    <Typography variant="body1" sx={styles.linkText}>
                      www.softsquare.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Follow Me */}
              <Box sx={styles.socialSection}>
                <Typography variant="h4" component="h3" sx={styles.sectionTitle}>
                  Follow Me
                </Typography>
                <Box sx={styles.socialButtons}>
                  <Button
                    variant="outlined"
                    sx={styles.socialButton}
                  >
                    <LinkedIn sx={styles.socialIcon} />
                  </Button>
                  <Button
                    variant="outlined"
                    sx={styles.socialButton}
                  >
                    <Twitter sx={styles.socialIcon} />
                  </Button>
                  <Button
                    variant="outlined"
                    sx={styles.socialButton}
                  >
                    <Email sx={styles.socialIcon} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

