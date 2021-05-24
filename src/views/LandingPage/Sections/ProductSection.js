import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

//import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Grid, ThemeProvider, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#848484"
  },
  containerTrastornos: {
    marginTop: "8px"
  }
});

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Centro de Psicoterapia Médica y de Terapia Holística</h2>
          <h5 className={classes.description}>
            Fundado en el año 1985 (por el Dr. Eugenio Herrero Lozano y el Dr. Julio Herrero Lozano
            entre otros profesionales) y constituido por un equipo multidisciplinar de profesionales (médicos, psicólogos, psiquiatras y fisioterapeutas).
          </h5>
          <h5 className={classes.description}>
            Entendemos la salud holísticamente, de una forma integral y, por eso, trabajamos con el cuerpo, la mente (emociones-pensamiento) y el espíritu,
            buscando el equilibrio y las respuestas en el interior de uno mismo (a través del trabajo Psicoterapéutico).
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} className={classes.description}>
            <InfoArea
              title="Base de trabajo"
              description={
                <Grid container spacing={2} direction="column" className={classes.description}>
                  <Grid item>
                  Nuestra base de trabajo es que la salud se puede aprender y cultivar. Sólo hace falta intención de cambio, buenas técnicas y entrenamiento. Se puede aprender a positivar, a disfrutar, a querese uno mismo, a relacionarse, a sanar y siempre mejorar.
                  </Grid>
                </Grid>
              }
              icon={AccountTreeIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Terapia individual"
              description={
                <Grid container spacing={2} direction="column" className={classes.description}>
                  <Grid item>
                    Se abordan de forma individualizada trastornos derivados del desequilibrio emocional y mental que generan problemas como ansiedad, depresión, estrés, ira y sus manifestaciones tanto en nuestro cuerpo como en el entorno.
              </Grid>
                  <Grid item>
                    Los trastornos más habituales son:
                  <Grid container direction="column" justify="flex-start" className={classes.containerTrastornos}>
                      <Grid item>
                        Ansiedad y estrés.
                  </Grid>
                      <Grid item>
                        Depresión.
                  </Grid>
                      <Grid item>
                        Fobias.
                  </Grid>
                      <Grid item>
                        Obsesiones.
                  </Grid>
                      <Grid item>
                        Problemas en las relaciones sociales.
                  </Grid>
                      <Grid item>
                        Disfunciones sexuales
                  </Grid>
                      <Grid item>
                        Alcohoslimo, tabaquismo y conductas adictivas.
                  </Grid>
                      <Grid item>
                        Enfermedades psicosomáticas.
                  </Grid>
                    </Grid>
                  </Grid>
                </Grid>}
              icon={PersonIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Terapia grupal"
              description={
                <Grid container spacing={2} direction="column" className={classes.description}>
                  <Grid item>
                    Los grupos de apoyo emocional son estructuras de trabajo para personas interesadas en crecer hacia el bienestar emocional.
                  </Grid>
                  <Grid item>
                    Se realizan en grupos de 6 a 12 personas que se reúnen periódicamente, acompañados de terapeutas expertos en técnicas de apoyo emocional.
                  </Grid>
                  <Grid item>
                    De este modo se consolidan y se practican las herramientas aprendidas en los diferentes cursos impartidos en este centro.
                  </Grid>
                  <Grid item>
                    También se aprende a expresar y compartir conflictos cotidianos y así poder manejarlos de una forma más adaptativa para nuestro día a día.
                  </Grid>
                  <Grid item>
                    También os ofrecemos grupos de seguimiento para algunos de los cursos que impartimos. Suelen ser una vez al mes y nos reunimos para seguir ahondando y aprendiendo sobre las técnicas desarrolladas en cada uno de los cursos. Es una forma de llevar a la práctica individual de cada uno la información que se imparte en los cursos de manera grupal.
                  </Grid>
                </Grid>
              }
              icon={GroupIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
