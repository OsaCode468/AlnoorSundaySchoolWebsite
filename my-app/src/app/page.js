"use client";
import NavBar from "./components/NavBar";
import { Box, Fade, Typography } from "@mui/material";
import Footer from "./components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 4, md: 8 },
          mb: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Fade in={loaded} timeout={2000}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              textAlign: "center",
              mb: 2,
            }}
          >
            Welcome To Alnoor Sunday School!
          </Typography>
        </Fade>
        <Fade in={loaded} timeout={3000}>
          <Box
            sx={{
              width: { xs: "80%", sm: "60%", md: "40%" },
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/Logo.png"
              height={500}
              width={500}
              alt="Alnoor Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Fade>
      </Box>
      <Footer sx={{ position: "relative", bottom: 0, width: "100%" }} />
    </>
  );
};

export default Home;
