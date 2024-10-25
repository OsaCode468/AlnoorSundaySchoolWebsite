"use client"
import NavBar from "./components/NavBar"
import { Box, Fade } from "@mui/material"
import Footer from "./components/Footer"
import Image from "next/image"
import { useEffect, useState } from "react";

const Home = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, [])

  return(
    <>
      <NavBar></NavBar>
      <Box sx = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px', marginBottom: '50px'}}>
        <Fade in={loaded} timeout={2000}>
          <h1>Welcome To Alnoor Sunday School!</h1>
        </Fade>
        <Fade in = {loaded} timeout={3000}>
          <Image src = "/Logo.png" height = {500} width = {500}></Image>
        </Fade>
      </Box>
      <Footer sx = {{position: "absolute", bottom: 0}}></Footer>
    </>
  )
}
export default Home