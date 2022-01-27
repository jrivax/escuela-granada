import React from "react";
import PropTypes from "prop-types";
import Hidden from "@mui/material/Hidden";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WebbeeLogo from "svg/logos/Webbee";
import paletteTypes from "common/paletteTypes";
import logo from "img/logo_esg_granada_green.png";
import logoEscuelaGranada from "img/logo_escuela_granada_verde.png";
import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PsychologyIcon from "@mui/icons-material/Psychology";
const Topbar = ({
  themeMode,
  themeToggler,
  setThemePalette,
  onSidebarOpen,
  paletteType,
}) => {
  const history = useHistory();
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      // justifyContent={'space-between'}
      // alignItems={'center'}
      // width={'100%'}
    >
      <Box display={"flex"} alignItems={"center"}>
        {/* <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
          <MenuIcon />
          </IconButton>
          <Box sx={{ height: 60, width: 180 }}
        </Box> */}
        <Box
          sx={{
            height: { xs: 45, md: 50 },
            width: { xs: 45, md: 50 },
          }}
        >
          <Box
            display={"flex"}
            alignItems="baseline"
            component="a"
            underline="none"
            href="/"
            title="webbee"
            // height={{ xs: 28, md: 45 }}
            // width={{ xs: 28, md: 45 }}
            height={"100%"}
            width={"100%"}
          >
            <img src={logo} alt={"logo"} height={"100%"} width={"100%"} />
            {/* <WebbeeLogo height={'100%'} width={'100%'} /> */}
          </Box>
        </Box>
        <Box
          sx={{
            height: { xs: 40, md: 50 },
            width: { xs: 75, md: 100 },
          }}
        >
          <Box
            display={"flex"}
            alignItems="baseline"
            component="a"
            underline="none"
            href="/"
            title="webbee"
            // height={{ xs: 28, md: 45 }}
            // width={{ xs: 50, md: 110 }}
            height={"100%"}
            width={"100%"}
          >
            <img
              src={logoEscuelaGranada}
              alt={"logoEscuelaGranada"}
              height={"100%"}
              width={"100%"}
            />
            {/* <WebbeeLogo height={'100%'} width={'100%'} /> */}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        gap={2}
        width={"100%"}
        justifyContent={"flex-end"}
      >
        {/* <Hidden mdDown> */}
        <Box
          sx={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          <Box mr={1} sx={{}}>
            <HomeIcon
              sx={{ fontSize: { xs: "2.2rem", md: "2.1rem" } }}
              color="primary"
            />
          </Box>
          <Box>
            <Typography fontSize={{ xs: "0rem", md: "1.5rem" }} color="primary">
              Inicio
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            history.push("/books-view");
          }}
        >
          <Box mr={1} sx={{}}>
            <MenuBookIcon
              sx={{ fontSize: { xs: "2.2rem", md: "2.1rem" } }}
              color="primary"
            />
          </Box>
          <Box sx={{}}>
            <Typography fontSize={{ xs: "0rem", md: "1.5rem" }} color="primary">
              Libros
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            history.push("/courses-view");
          }}
        >
          <Box mr={1} sx={{}}>
            <PsychologyIcon
              sx={{ fontSize: { xs: "2.2rem", md: "2.1rem" } }}
              color="primary"
            />
          </Box>
          <Box sx={{}}>
            <Typography fontSize={{ xs: "0rem", md: "1.5rem" }} color="primary">
              Cursos
            </Typography>
          </Box>
        </Box>
        {/* </Hidden> */}
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
