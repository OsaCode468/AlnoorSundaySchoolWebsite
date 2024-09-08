import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Box, Typography } from "@mui/material"
const Careers = () => {
    return (
        <div>
            <NavBar></NavBar>
                <Box sx = {{display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: 'center'}}>
                    <Typography variant = 'h2' >
                        Want to help with our mission?
                    </Typography>
                </Box>
            <Footer></Footer>
        </div>
    )
}
export default Careers