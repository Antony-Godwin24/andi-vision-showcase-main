import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import { aboutStyles } from './style';
import officeSpace from '@/assets/office-space.jpg';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const theme = useTheme();
  const styles = aboutStyles(theme, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box component="section" ref={sectionRef} sx={styles.section}>
      <Box sx={styles.container}>
        <Box sx={styles.gridContainer}>
          {/* Text Content */}
          <Box sx={styles.textContent}>
            <Typography variant="h2" component="h2" sx={styles.title}>
              About Me
            </Typography>
            <Box sx={styles.accentLine} />
            <Typography variant="body1" sx={styles.paragraph}>
              As the CEO and founder of Softsquare, I've dedicated my career to
              building innovative software solutions that transform businesses
              and empower communities.
            </Typography>
            <Typography variant="body1" sx={styles.paragraph}>
              With over a decade of experience in the technology sector, I lead
              a talented team focused on delivering cutting-edge solutions that
              bridge the gap between technology and human needs.
            </Typography>
            <Typography variant="body1" sx={styles.paragraph}>
              My vision extends beyond profit margins—I believe in creating
              technology that makes a meaningful impact on society, fostering
              digital literacy, and building sustainable communities.
            </Typography>
          </Box>

          {/* Image Content */}
          <Box sx={styles.imageContent}>
            <Card sx={styles.imageCard}>
              <Box
                component="img"
                src={officeSpace}
                alt="Softsquare Office"
                sx={styles.image}
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};