"use client"
import { Box, Fade, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
const About = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, [])
  return (
    <Box>
      <NavBar />
      <Fade in={loaded} timeout={3000}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger
          gap: { xs: '20px', md: '50px' }, // Adjust gap based on screen size
          marginTop: { xs: '20px', md: '50px' },
          marginBottom: { xs: '20px', md: '50px' },
          padding: { xs: '10px', md: '0' }, // Add padding for smaller screens
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' }, // Center text on smaller screens
            maxWidth: { xs: '100%', md: '50%' }, // Take full width on small screens
          }}
        >
          <Typography
            variant="h2" // Change h1 to h2 for better accessibility
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
              marginBottom: '20px',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1" // Change variant to body1 for paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
              lineHeight: { xs: '1.5', md: '1.75' },
            }}
          >
At Al-Noor Islamic Sunday School, our mission is to create an empowering and nurturing environment that brings together a vibrant community, delivers exceptional Islamic education, and fosters the development of strong character among our students. We are dedicated to providing a welcoming space where individuals of all ages and backgrounds can feel a true sense of belonging and unity.

Our curriculum is designed to enrich both the minds and hearts of our students through a comprehensive Islamic education. With engaging, interactive teaching methods, we equip our students with a deep understanding of Islamic values and principles, empowering them to make positive contributions to society.


We also believe that character development is key to shaping well-rounded, ethical individuals. By prioritizing values like integrity, compassion, and social responsibility, we aim to guide students toward becoming responsible and morally grounded members of society.

Through our holistic approach to community building, education, youth empowerment, and character development, Al-Noor Islamic Sunday School is committed to shaping a generation that is compassionate, confident, and guided by Islamic teachings.          </Typography>
        </Box>
        <Box sx = {{paddingBottom: {md: '90px'}}}>
          <Image
            src="/AboutUs.png"
            width={600}
            height={500}
            style={{
              maxWidth: '100%', // Make image responsive
              height: 'auto',   // Keep aspect ratio
              borderRadius: '10px', // Optional styling
            }}
            alt="About Us"
          />
        </Box>
      </Box>
      </Fade>
      <Footer />
    </Box>
  );
};

export default About;
