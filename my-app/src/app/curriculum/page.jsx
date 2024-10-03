import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const Curriculum = () => {
  return (
    <Box>
      <NavBar />
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
            Curriculum
          </Typography>
          <Typography
            variant="body1" // Change variant to body1 for paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
              lineHeight: { xs: '1.5', md: '1.75' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget mi...
          </Typography>
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
      <Footer />
    </Box>
  );
};

export default Curriculum;
