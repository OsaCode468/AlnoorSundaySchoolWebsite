"use client"
import { Box, Fade, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

const Curriculum = () => {
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
            Curr
          </Typography>
          <Typography
            variant="body1" // Change variant to body1 for paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
              lineHeight: { xs: '1.5', md: '1.75' },
            }}
          >
Our Islamic Studies curriculum is centered around the Qamar textbook, designed specifically for young learners. This engaging and interactive textbook introduces students to the foundational teachings of Islam, covering essential topics such as Aqaid, Fiqh, Seerah, and Akhlaq, and basic Islamic morals and values. Through colorful illustrations and interactive activities as well as engaging and highly qualified teachers, the Qamar curriculum helps children build a solid understanding of their faith while fostering a love for learning about Islam.          </Typography>
        </Box>
        <Image
          src="/Curriculum.png"
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
      </Fade>
      <Footer />
    </Box>
  );
};

export default Curriculum;
