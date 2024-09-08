import NavBar from "./components/NavBar"
import { Box } from "@mui/material"
import Footer from "./components/Footer"
import Image from "next/image"
import { Fullscreen } from "@mui/icons-material"
const Home = () => {
  return(
    <>
      <NavBar></NavBar>
      <Box sx = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}>
        <h1>Welcome</h1>
        <Image src = "/AlnoorWelcome.jpeg" height = {500} width = {900}></Image>
      </Box>
      <Footer sx = {{position: "absolute", bottom: 0}}></Footer>
    </>
  )
}
export default Home