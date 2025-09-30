import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  EmojiEvents,
  Business,
  Work,
  School
} from '@mui/icons-material';
import { timelineStyles } from './style';

export const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);
  const theme = useTheme();
  const styles = timelineStyles(theme, visibleItems);

  const timeline = [
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received Tech Leadership Award for innovation in software development",
      icon: EmojiEvents,
    },
    {
      year: "2019",
      title: "Founded Softsquare",
      description: "Established Softsquare with a mission to deliver world-class software solutions",
      icon: Business,
    },
    {
      year: "2015",
      title: "Technology Leadership",
      description: "Led technology initiatives across multiple Fortune 500 companies",
      icon: Work,
    },
    {
      year: "2010",
      title: "Academic Achievement",
      description: "Earned Master's degree in Computer Science with honors",
      icon: School,
    },
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header */}
        <Box sx={styles.header}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            Career Journey
          </Typography>
          <Box sx={styles.accentLine} />
        </Box>

        {/* Timeline Items */}
        <Box sx={styles.timelineContainer}>
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <Box
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                sx={{
                  ...styles.timelineItem,
                  ...(visibleItems.has(index) 
                    ? styles.visible 
                    : index % 2 === 0 
                    ? styles.hiddenLeft 
                    : styles.hiddenRight
                  )
                }}
              >
                <Card sx={styles.timelineCard}>
                  <Box sx={styles.cardContent}>
                    <Box sx={styles.iconContainer}>
                      <Box sx={styles.iconBackground}>
                        <Icon sx={styles.icon} />
                      </Box>
                    </Box>
                    <Box sx={styles.textContent}>
                      <Box sx={styles.yearContainer}>
                        <Typography variant="h6" component="span" sx={styles.year}>
                          {item.year}
                        </Typography>
                        <Box sx={styles.divider} />
                      </Box>
                      <Typography variant="h5" component="h3" sx={styles.itemTitle}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={styles.itemDescription}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};