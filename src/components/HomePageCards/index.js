import React from 'react';
import { Grid, Card, CardContent, CardActionArea, Container, Typography } from '@mui/material';
import styles from './styles.module.css';

const Cards = () => {
  const docs = [
    { title: "Self Hosting", description: "Host your own services from scratch.", link: "/docs/self-hosting" },
    { title: "Linux Ricing", description: "Customize and beautify your Linux desktop.", link: "/docs/linux-ricing" },
    { title: "Arch Linux", description: "Master the installation and configuration of Arch Linux.", link: "/docs/arch-linux" },
    { title: "Windows", description: "Optimize and personalize your Windows environment.", link: "/docs/windows" },
  ];

  return (
    <Container style={{ marginTop: '3rem', padding: '0 10%' }}>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 'bold', marginBottom: '3rem' }}
      >
        Explore Docs.
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={4}>
        {docs.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc.title}>
            <Card className={styles.card}>
              <CardActionArea href={doc.link} className={styles.cardActionArea}>
                <CardContent className={styles.cardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={styles.cardTitle}
                  >
                    {doc.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.cardDescription}
                  >
                    {doc.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
