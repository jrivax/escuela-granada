import React from "react";
import { useTheme, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import Container from "common/Container";
import { Hero, Overview, Professionals, Contact } from "./components";
// import backgroundImage from 'img/camino_salud_2.jpg';
import backgroundImage from "img/path_background.jpg";

const Home = ({ themeMode = "light" }) => {
  const theme = useTheme();
  return (
    <Box>
      {/* <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box> */}
      <Box
        // minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
        height={"100vh"}
        width={"100vw"}
        position={"relative"}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundAttachment: "fixed",
          "&:after": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            content: '" "',
            zIndex: 1,
            backgroundColor: theme.palette.primary.backgroundImage,
            backgroundAttachment: "fixed",
            opacity: 0.7,
          },
        }}
      >
        <Box
          position={{ xs: "relative", md: "absolute" }}
          top={{ xs: "25%", md: '50%' }}
          // top={"50%"}
          width={"100%"}
          height={"auto"}
          sx={{
            transform: { md: "translateY(-50%)" },
          }}
          zIndex={2}
        >
          <Container>
            <Hero />
          </Container>
        </Box>
      </Box>
      <Box>
        <Container>
          <Overview themeMode={themeMode} />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Professionals />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.primary.main}>
        <Container>
          <Contact />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
