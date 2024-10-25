"use client";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Box, Fade, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";

const Careers = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Fade in={loaded} timeout={3000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            mb: 10,
            px: 2,
          }}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", sm: "32px", md: "40px" },
                textAlign: "center",
                mb: 2,
              }}
            >
              Want to help with our mission?
            </Typography>
          </Box>
          <Box
            sx={{
              borderColor: "black",
              height: "auto",
              width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
              borderStyle: "solid",
              borderRadius: "25px",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ fontSize: { xs: "60px", md: "80px" } }} />
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "18px", sm: "22px", md: "28px" },
                }}
              >
                832-794-6285
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <EmailIcon sx={{ fontSize: { xs: "60px", md: "80px" } }} />
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "26px" },
                }}
              >
                alnoorsundayschool@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
      <Footer />
    </Box>
  );
};

export default Careers;
