import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import TypingEffect from 'react-typing-effect';
import styles from './styles.module.css';

const HomePageHero = () => {
  return (
    <Box className={styles.heroSection}>
      <Container className={styles.heroContent}>
        {/* Title */}
        <Typography variant="h1" className={styles.heroTitle} sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
          Uni Docs.
        </Typography>

        {/* Subtitle with typing effect */}
        <Typography variant="h4" className={styles.heroSubtitle}>
          Explore my configurations and setups for{' '}
          <span className={styles.typingText}>
            <TypingEffect
              text={['Self Hosting', 'Linux Ricing', 'Arch Linux', 'Windows']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePageHero;
