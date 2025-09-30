import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  Favorite,
  People,
  MenuBook,
  EmojiObjects
} from '@mui/icons-material';
import { communityStyles } from './style';
import communityImage from '@/assets/community.jpg';

export const CommunitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const theme = useTheme();
  const styles = communityStyles(theme, isVisible);

  const initiatives = [
    {
      icon: Favorite,
      title: "Tech for Good",
      description: "Supporting nonprofits with pro-bono technology solutions",
    },
    {
      icon: People,
      title: "Mentorship Program",
      description: "Guiding aspiring entrepreneurs and young tech professionals",
    },
    {
      icon: MenuBook,
      title: "Digital Literacy",
      description: "Conducting workshops to bridge the digital divide",
    },
    {
      icon: EmojiObjects,
      title: "Innovation Hub",
      description: "Creating spaces for collaboration and knowledge sharing",
    },
  ];

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
        {/* Image and Text Grid */}
        <Box sx={styles.mainGrid}>
          {/* Image Card */}
          <Box sx={styles.imageContainer}>
            <Card sx={styles.imageCard}>
              <Box
                component="img"
                src={communityImage}
                alt="Community Engagement"
                sx={styles.image}
              />
            </Card>
          </Box>

          {/* Text Content */}
          <Box sx={styles.textContent}>
            <Typography variant="h2" component="h2" sx={styles.title}>
              Community Impact
            </Typography>
            <Box sx={styles.accentLine} />
            <Typography variant="body1" sx={styles.paragraph}>
              Beyond business success, I'm deeply committed to giving back to
              the community and creating opportunities for the next generation
              of tech leaders.
            </Typography>
            <Typography variant="body1" sx={styles.paragraph}>
              Through various initiatives, we're working to make technology
              accessible, foster innovation, and create lasting positive change
              in our communities.
            </Typography>
          </Box>
        </Box>

        {/* Initiatives Grid */}
        <Box sx={styles.initiativesGrid}>
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <Box
                key={index}
                sx={{
                  ...styles.initiativeItem,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Card sx={styles.initiativeCard}>
                  <Box sx={styles.initiativeIcon}>
                    <Icon sx={styles.icon} />
                  </Box>
                  <Typography variant="h5" component="h3" sx={styles.initiativeTitle}>
                    {initiative.title}
                  </Typography>
                  <Typography variant="body2" sx={styles.initiativeDescription}>
                    {initiative.description}
                  </Typography>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};