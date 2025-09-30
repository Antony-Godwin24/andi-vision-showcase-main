import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  Code,
  People,
  RocketLaunch,
  TrackChanges
} from '@mui/icons-material';
import { activitiesStyles } from './style';
import techInnovation from '@/assets/tech-innovation.jpg';
import leadership from '@/assets/leadership.jpg';

export const ActivitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const theme = useTheme();
  const styles = activitiesStyles(theme, isVisible);

  const activities = [
    {
      icon: Code,
      title: "Technology Innovation",
      description: "Leading development of cutting-edge AI and cloud solutions",
    },
    {
      icon: People,
      title: "Team Building",
      description: "Cultivating a culture of excellence and continuous learning",
    },
    {
      icon: RocketLaunch,
      title: "Product Strategy",
      description: "Driving product vision and market expansion initiatives",
    },
    {
      icon: TrackChanges,
      title: "Business Growth",
      description: "Scaling operations and establishing strategic partnerships",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box component="section" ref={sectionRef} sx={styles.section}>
      <Box sx={styles.container}>
        {/* Header Section */}
        <Box sx={styles.header}>
          <Typography variant="h2" component="h2" sx={styles.title}>
            Professional Activities
          </Typography>
          <Box sx={styles.accentLine} />
          <Typography variant="body1" sx={styles.subtitle}>
            Driving innovation and excellence across multiple domains
          </Typography>
        </Box>

        {/* Activities Grid */}
        <Box sx={styles.activitiesGrid}>
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Box
                key={index}
                sx={{
                  ...styles.activityItem,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Card sx={styles.activityCard}>
                  <Box sx={styles.activityIcon}>
                    <Icon sx={styles.icon} />
                  </Box>
                  <Typography variant="h5" component="h3" sx={styles.activityTitle}>
                    {activity.title}
                  </Typography>
                  <Typography variant="body2" sx={styles.activityDescription}>
                    {activity.description}
                  </Typography>
                </Card>
              </Box>
            );
          })}
        </Box>

        {/* Feature Cards */}
        <Box sx={styles.featureGrid}>
          <Card sx={styles.featureCard}>
            <Box
              component="img"
              src={techInnovation}
              alt="Technology Innovation"
              sx={styles.featureImage}
            />
            <Box sx={styles.featureContent}>
              <Typography variant="h4" component="h3" sx={styles.featureTitle}>
                Innovation Leadership
              </Typography>
              <Typography variant="body1" sx={styles.featureDescription}>
                Pioneering next-generation solutions that transform industries and create value
              </Typography>
            </Box>
          </Card>

          <Card sx={styles.featureCard}>
            <Box
              component="img"
              src={leadership}
              alt="Strategic Leadership"
              sx={styles.featureImage}
            />
            <Box sx={styles.featureContent}>
              <Typography variant="h4" component="h3" sx={styles.featureTitle}>
                Strategic Vision
              </Typography>
              <Typography variant="body1" sx={styles.featureDescription}>
                Building high-performing teams and fostering a culture of innovation
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};