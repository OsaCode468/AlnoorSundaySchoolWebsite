"use client"
import { Box } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook } from "@mui/icons-material";
import Link from "next/link";
const Footer = () => {
    return(
        <Box sx = {{backgroundColor: 'black', height: "200px", width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "30px"}}>
                <Link href="https://www.instagram.com/alnoorsundayschool/" target="_blank"><InstagramIcon htmlColor="white" sx = {{fontSize: '50px'}}></InstagramIcon></Link>
                <Link href="https://www.facebook.com/people/Al-Noor-Sunday-School/61564453744014/" target="_blank"><Facebook htmlColor="white" sx = {{fontSize: '50px'}}></Facebook></Link>

            </Box>
        </Box>
    )
}
export default Footer