import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import backgroundImage from "../../assets/img/camino_salud.jpg"


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Escuela Granada"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={backgroundImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Enseñamos Salud</h1>
              <h4>
              Nuestra base de trabajo es que la salud se puede aprender y cultivar. 
              Sólo hace falta intención de cambio, buenas técnicas y entrenamiento. 
              Se puede aprender a positivar, a disfrutar, a querese uno mismo, a relacionarse, a sanar y siempre mejorar.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=D3AzWbBwVI8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayArrowIcon />
                Ver video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
