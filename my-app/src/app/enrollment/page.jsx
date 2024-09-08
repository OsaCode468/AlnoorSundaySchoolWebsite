import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
const Enrollment = () => {
    return (
    <div>
        <NavBar></NavBar>
        <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeuecKo1bBQzLrcMePzzj-61wYVrFmeUeAHEnl7jPjf1V7gyg/viewform?embedded=true" width="640" height="1650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Box>
        <Footer></Footer>
    </div>
    )

}
export default Enrollment