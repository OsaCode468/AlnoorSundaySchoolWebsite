"use client"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Box, Fade, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from "react";
const Careers = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true);
    }, [])
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar></NavBar>
                  <Fade in={loaded} timeout={3000}>

                <Box sx = {{display: "flex", flexDirection: 'column', flexGrow: 1, alignItems: "center", justifyContent: 'center', marginTop: "20px", marginBottom: '140px'}}>
                <Box sx={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Typography 
                        variant='h2' 
                        sx={{ 
                            marginBottom: '10px', 
                            fontSize: { xs: '28px', sm: '34px', md: '48px' } // Responsive font size
                        }}
                    >
                        Want to help with our mission?
                    </Typography>
                </Box>
                    <Box sx = {{borderColor: 'black', height: '250px', width: '630px' ,borderStyle: 'solid', borderRadius: '25px'}}>
                        <Box sx = {{display : "flex", gap: 5, paddingTop: '10px'}}>
                            <PhoneIcon sx = {{fontSize: '100px'}}></PhoneIcon>
                            <Typography variant = 'h2' sx = {{paddingTop: '10px'}}> 832-794-6285 </Typography>
                        </Box>
                        <Box sx = {{display : "flex", gap: 5, paddingTop: '10px'}}>
                            <EmailIcon sx = {{fontSize: '100px'}}></EmailIcon>
                            <Typography variant = 'h2' sx = {{paddingTop: '30px', fontSize: '32px'}}> alnoorsundayschool@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
                </Fade>
                <Footer></Footer>
        </Box>
    )
}
export default Careers