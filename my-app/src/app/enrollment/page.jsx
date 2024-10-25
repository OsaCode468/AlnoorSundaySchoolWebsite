"use client"

import NavBar from "../components/NavBar";
import { Box, Fade } from "@mui/material";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const Enrollment = () => {
    const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, [])
    return (
    <div>
        <NavBar></NavBar>
        <Fade in={loaded} timeout={3000}>
        <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeuecKo1bBQzLrcMePzzj-61wYVrFmeUeAHEnl7jPjf1V7gyg/viewform?embedded=true" width="640" height="1650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Box>
        </Fade>
        <Footer></Footer>
    </div>
    )

}
export default Enrollment