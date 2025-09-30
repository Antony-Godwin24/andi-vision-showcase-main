import React, { useEffect, useState } from 'react';
import {
  Button,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { heroStyles } from './style';
import heroCeo from '@/assets/hero-ceo.jpg';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();
  const styles = heroStyles(theme, scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box component="section" sx={styles.section}>
      {/* Parallax Background */}
      <Box sx={styles.parallaxBackground}>
        <Box
          component="img"
          src={heroCeo}
          alt="Andi Giri - CEO of Softsquare"
          sx={styles.backgroundImage}
        />
        <Box sx={styles.backgroundOverlay} />
      </Box>

      {/* Content */}
      <Box sx={styles.content}>
        <Typography variant="h1" component="h1" sx={styles.title}>
          Andi Giri
        </Typography>
        <Box sx={styles.accentLine} />
        <Typography variant="h4" component="p" sx={styles.subtitle1}>
          CEO & Founder, Softsquare
        </Typography>
        <Typography variant="h6" component="p" sx={styles.subtitle2}>
          Driving innovation and excellence in software development
        </Typography>
        <Button
          onClick={scrollToContent}
          variant="contained"
          size="large"
          sx={styles.ctaButton}
          endIcon={<KeyboardArrowDown />}
        >
          Explore My Journey
        </Button>
      </Box>

      {/* Scroll Indicator */}
      <Box sx={styles.scrollIndicator}>
        <Box sx={styles.scrollContainer}>
          <Box sx={styles.scrollDot} />
        </Box>
      </Box>
    </Box>
  );
};