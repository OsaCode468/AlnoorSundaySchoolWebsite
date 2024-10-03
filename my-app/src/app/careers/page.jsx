import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Box, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Careers = () => {
    return (
        <div>
            <NavBar></NavBar>
                <Box sx = {{display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: 'center', marginTop: "20px", marginBottom: '20px'}}>
                    <Typography variant = 'h2' sx = {{marginBottom: '10px'}}>
                        Want to help with our mission?
                    </Typography>
                    <Box sx = {{borderColor: 'black', height: '250px', width: '630px' ,borderStyle: 'solid', borderRadius: '25px'}}>
                        <Box sx = {{display : "flex", gap: 5, paddingTop: '10px'}}>
                            <PhoneIcon sx = {{fontSize: '100px'}}></PhoneIcon>
                            <Typography variant = 'h2' sx = {{paddingTop: '10px'}}> 3746737676</Typography>
                        </Box>
                        <Box sx = {{display : "flex", gap: 5, paddingTop: '10px'}}>
                            <EmailIcon sx = {{fontSize: '100px'}}></EmailIcon>
                            <Typography variant = 'h2' sx = {{paddingTop: '30px', fontSize: '32px'}}> alnoorsundayschool@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
            <Box sx = {{marginTop: "180px"}}>
                <Footer></Footer>
            </Box>
        </div>
    )
}
export default Careers