import { Box, Typography } from "@mui/material"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from "next/image"
const About = () => {
    return (
        <Box>
            <NavBar></NavBar>
            <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: "center", gap: '20px', marginTop: '50px', marginBottom: '50px'}}>
                <Box sx = {{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h1">
                        About Us
                    </Typography>
                    <Typography variant = "p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget mi quis urna luctus venenatis at vel enim. Vivamus condimentum pretium velit eu auctor. Nullam accumsan elit orci, vitae faucibus neque hendrerit vitae. Proin lectus leo, ultricies non mi in, vestibulum iaculis mauris. Nullam mollis tempus dapibus. Duis nunc velit, ornare nec lacinia id, varius vel metus. Maecenas non ante sapien.

Fusce elit odio, lobortis sed magna sed, mollis mattis massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent arcu diam, tempus sed blandit convallis, scelerisque ut tortor. Cras luctus, est quis finibus tristique, enim orci facilisis augue, in tristique neque eros sodales mi. Vestibulum eget turpis quis diam dignissim laoreet sit amet a velit. Fusce mollis ex in elit vestibulum laoreet. Donec id sapien non felis suscipit lobortis. Nunc id enim in enim iaculis interdum quis nec lacus. In hac habitasse platea dictumst. Nunc quis eleifend ex, eget pretium eros. Maecenas non elit ac nisl placerat varius nec at ipsum.

Integer at est dui. Aliquam sagittis vestibulum leo quis ullamcorper. Maecenas faucibus velit at sapien commodo, cursus consequat mauris viverra. Donec vehicula mattis libero id vehicula. Nunc ornare interdum orci. Nullam posuere ante non risus rutrum cursus. Duis ornare neque fermentum hendrerit viverra. Morbi sit amet lacus dui.

Suspendisse potenti. Ut arcu lectus, consectetur vitae viverra eget, iaculis sed nibh. Curabitur quis sem libero. Duis at nulla eleifend elit venenatis pellentesque. Mauris sed sem nulla. Nam ultrices vitae nunc eleifend sagittis. Nullam eu efficitur ante, sed rutrum libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam dui tellus, malesuada eu lorem sed, tempor euismod ligula. Morbi laoreet leo vel nisl porta varius. Proin ut nisi elementum, fermentum dui blandit, consequat lacus. Vivamus vitae mauris felis. Integer finibus vulputate arcu, id viverra metus rhoncus fermentum. Integer condimentum finibus egestas. Nunc tristique tellus in volutpat placerat. Ut porta sagittis massa eu pharetra. Cras eu mi finibus, vestibulum lorem lobortis, ornare nunc. Fusce eu malesuada nibh, sed ornare urna. Nunc vel fringilla nisi. Duis dignissim iaculis sodales. Morbi commodo lectus at odio finibus dapibus. Integer vitae erat convallis, interdum quam sed, semper odi</Typography>
                </Box>
                <Image src = "/AboutUs.png" width = {600} height={500}></Image>

            </Box>
            <Footer></Footer>
        </Box>
    )
}
export default About