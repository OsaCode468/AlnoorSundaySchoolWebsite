"use client"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Box, Fade, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";


const itemData = [
  {
    original: "/IMG_2086.png",
    thumbnail: "/IMG_2086.png",
  },
  {
    original: "/IMG_2460.png",
    thumbnail: "/IMG_2460.png",
  },
  {
    original: "/IMG_2241.png",
    thumbnail: "/IMG_2241.png",
  },
  {
    original: "/IMG_2233.png",
    thumbnail: "/IMG_2233.png",
  },
  {
    original: "/IMG_2228.png",
    thumbnail: "/IMG_2228.png",
  },
  {
    original: "/IMG_2131.png",
    thumbnail: "/IMG_2131.png",
  }
];

const Gallery = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true);
  }, [])
    return (
        <>
            <NavBar />
            <Fade in={loaded} timeout={3000}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                    <Box sx={{ width: '100%', maxWidth: "100%" }}>
                        <ImageList sx={{ width: '100%' }} cols={3} rowHeight={"100%"} variant="quilted">
                            {itemData.map((item, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        srcSet={`${item.original}`}
                                        src={`${item.original}`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
                </Fade>
            <Footer />
        </>
    );
}

export default Gallery;
