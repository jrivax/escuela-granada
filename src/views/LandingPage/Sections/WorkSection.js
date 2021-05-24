import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ponte en contacto con nosotros</h2>
          <h4 className={classes.description}>
            Si estás interesado no dudes en ponerte en contacto con nosotros y le ofreceremos toda la información necesaria.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nombre y apellidos"
                  id="nombre"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Tu mensaje"
                id="mensaje"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Mandar mensaje</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            c/ Jardín de San Federico, 5 Bajo Izq. 28009 Madrid.
          </h4>
          <h4 className={classes.description}>
            Tlf. 91 401 59 68
          </h4>
          <h4 className={classes.description}>
            Tlf. 638 44 57 06
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
