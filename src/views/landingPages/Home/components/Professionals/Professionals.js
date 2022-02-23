import React from "react";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/Linkedin";

import julioHerrero from "img/faces/julioHerrero.jpg";
import eugenio from "img/faces/eugenio.png";
import maria from "img/faces/maria.jpeg";
import ester from "img/faces/ester.jpg";
import clara from "img/faces/clara_true.jpg";
import noelia from "img/faces/clara_dos.png";
import guadalupe from "img/faces/guada.png";
import belen from "img/faces/belen.jpg";
import mar from "img/faces/mar.jpeg";
import girl from "img/faces/girl.png";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Professionals = (props) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const handleLinkToLinkedIn = (link) => {
    window.open('https://'+link, '_blank');
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          gutterBottom
          align={"center"}
        >
          Nuestro equipo de profesionales
        </Box>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"textSecondary"}
          align={"center"}
          data-aos="fade-up"
        >
          Creemos en el trabajo en equipo
        </Typography>
      </Box>
      <Box>
        <Slider {...sliderOpts}>
          {/* <Grid container spacing={2}> */}
          {[
            {
              name: "Dr. Eugenio Herrero Lozano",
              title: "Médico Psiquiatra y Neurólogo. Psicoterapeuta.",
              avatar: `${eugenio}`,
              description: [
                "El Dr. Eugenio Herrero fue médico especialista en Psiquiatría y Neurología, diplomado en Sofrología Médica, miembro fundador del Instituto de Estudios Psicosomáticos y Psicoterapia Médica, miembro fundador y presidente de la asociación Internacional de Terapias Holísticas Tradicionales, entre otras titulaciones y cargos.",
                "Desde 1971 dictó cursos de relajación para médicos, psicólogos y pacientes en el Hospital Provincial de Madrid. Desde 1981 dirigió seminarios teórico-prácticos sobre técnicas de relajación e hipnosis, así como grupos de terapia de relajación, en el Hospital Central de la Cruz Roja de Madrid.",
                "Fue el creador de la técnica de Relajación Creativa que se sigue impartiendo en la Escuela Granada.",
              ],
            },
            {
              name: "Dr. Julio Herrero Lozano",
              title: "Médico Psiquiatra. Psicoterapeuta.",
              avatar: `${julioHerrero}`,
              description: [
                "Cursó sus estudios de Medicina hasta licenciarse en el año 1972 en la Universidad Complutense de Madrid, desarrollando su actividad como médico de familia e internista en el Hospital Clínico San Carlos.",
                "En 1975 se especializó en Psiquiatría, ejerciendo como médico psiquiatra y psicoterapeuta desde entonces.",
                "Médico del Ayuntamiento de Madrid desde 1974, ocupó la plaza de Psiquiatría de la Beneficencia Municipal desde 1980 hasta la desaparición de la misma en 1993 y, desde entonces, desarrolla su actividad en el ámbito individual y de grupo, impartiendo cursos de Entrenamiento en Relajación Creativa y Habilidades Emocionales así como grupos de Apoyo Emocional para los distintos Programas Municipales (Funcionarios, Menopausia, Obesidad, Pacientes Seropositivos, etc.)",
                "Miembro Fundador del centro de Psicoterapia Médica Escuela Granda en Madrid donde ejerce como Psiquiatra y Psicoterapeuta.",
                "Ganador del lV premio Madrid Previene por el proyecto: “Evaluación de los resultados obtenidos tras la aplicación a población de alto riesgo emocional del proyecto G.E.R.C.H.E. para la prevención en Salud Laboral de la Policía Municipal”",
              ],
            },
            {
              name: "Dña. Clara Giménez del Olmo",
              title: "Psicólogo Psicoterapeuta",
              avatar: `${clara}`,
              description: [
                ,
                "Licenciada en Psicología por la Universidad complutense de Madrid en 1982.",
                "Formación en Psicoterapia Cognitiva en el Servicio de psiquiatría del Hospital Central Cruz Roja Española de Madrid. 1982-1986",
                "1982-1987. Psicólogo Clínico formando parte del equipo terapéutico del Hospital Central Cruz Roja Española de Madrid. Dirigido por el Dr. Esteban Acosta Lorenzo.",
                "1984-1985. Formación en Análisis y Técnicas de Modificación de Conducta. Terapia Marital y Familiar. Trastornos Psicosomáticos en Madrid. I.A.M.C.O.",
                "Miembro  fundador del Centro de Psicoterapia Médica Escuela Granada en Madrid, donde ejerce como Psicólogo Psicoterapeuta desde 1985, realizando diversas actividades terapéutico- docentes.",
                "Formadora de Monitores en la técnica de Entrenamiento en Relajación Creativa (Dr. Eugenio Herrero Lozano), tanto para adultos como infantil.",
                "Practitioner en Programación Neurolingüística. 2001.",
                "Entrenadora oficial EMDR INSTITUTE para España. INSTITUTE USA Francine Sapiro",
              ],
            },
            {
              name: "Dra. Ester Herrero Martín",
              title: "Médico Psicoterapeuta",
              avatar: `${ester}`,
              description: [
                "Licenciada en Medicina y Cirugía (Universidad Complutense de Madrid)",
                "Especialista en Medicina Familiar y Comunitaria (Hospital Ramón y Cajal)",
                "Médico en Madrid Salud (Ayuntamiento de Madrid)",
                "Monitora de los Cursos de Entrenamiento en Relajación Creativa, Habilidades Emocionales y Consciencia Creativa",
                "Master en Psicoterapia Individual y de Grupo (Universidad Pontificia de Comillas de Madrid)",
                "Experta en Terapia Centrada en la Persona, Gestalt, Focusing, Bioenergética y Medicina Psicosomática",
                "Master en Programación Neurolingüística",
              ],
            },
            {
              name: "Dra. María Herrero Martín",
              title: "Médico Psicóloga. Psicoterapeuta",
              avatar: `${maria}`,
              description: [
                "Licenciada en Psicología por la Universidad Autónoma de Madrid ",
                "Licenciada en Medicina y Cirugía por la Universidad Complutense de Madrid ",
                "Máster en Psicoterapia Individual y de Grupo por la Universidad Pontificia de Comillas de Madrid",
                "Experta en Terapia centrada en el cliente, Gestalt, Focusing, Bioenergética y Medicina Psicosomática",
                "Monitora de la Técnica Entrenamiento en Relajación Creativa para adultos, impartiendo la tecnica en diferentes centros. Entre ellos en el CIFSE (centro destinado a la capacitación y el entrenamiento del personal de los Cuerpos y Servicios de Seguridad, Emergencias y Movilidad.Centro Integral de Formación de Seguridad y Emergencias) del Ayuntamiento de Madrid",
                "Monitora de la tecnica Entrenamiento  en Relajación Creativa online",
                "Monitora de la Técnica Entrenamiento en Relajación Creativa para Adolescentes",
                "Monitora de la Técnica Entrenamiento en Relajación Creativa Infantil",
                "Experiencia de más de 15 años como psicoterapeuts haciendo terapias individuales y terapias de grupo",
              ],
            },
            {
              name: "Noelia Casas Giménez",
              title: "Psicóloga infanto-juvenil",
              avatar: `${noelia}`,
              description: [
                "Licenciada en Psicología por la Universidad Autónoma de Madrid.",
                "Master en Psicología infantil, adolescencia y juventud en el Instituto de Lenguaje y Desarrollo (I.L.D).",
                "Formación especializada y experiencia en diagnóstico e intervención en Trastornos emocionales, conductuales y Trastornos de alimentación. Centro Agora.",
                "Formación especializada y experiencia en diagnóstico e intervención en Altas Capacidades. Centro Agora.",
                "Experto en psicoterapia breve en niños, adolescentes y jóvenes. Sociedad Española de Medicina Psicosomática.SEMPYP.",
                "Experto en TDAH por la Escuela del Dr. Barkley y Fundación educación activa.",
                "Especialista en Trastornos de aprendizaje y Terapia del Lenguaje en la infancia, adolescencia y juventud. Fundación ICSE.",
                "Experto en intervención en trauma con EMDR. Sociedad Española de Medicina Psicosomática. SEMPYP.",
                "Especialista en Atención Temprana por la Fundación ICSE.",
                "Educadora de masaje infantil en bebés de 2 a 8 meses de edad, para favorecer el vínculo afectivo entre padres e hijos. Asociación Española de Masaje Infantil.",
              ],
            },
            {
              name: "Dña. Guadalupe Mena Rodriguez",
              title: "Psicóloga sanitaria",
              avatar: `${guadalupe}`,
              description: [
                "Psicóloga sanitaria por la Universidad Complutense de Madrid",
                "Experta en trastornos de ansiedad y sintomatología depresiva en adultos ",
                "Experta en adicciones ",
                "Experta en población infanto-juvenil",
              ],
              linkedIn: "linkedin.com/in/guadalupe-mena-rodríguez-964317124",
            },
            {
              name: "Dña. Belén Pérez de la Oliva",
              title: "Psicóloga Psicoterapeuta",
              avatar: `${belen}`,
              description: [
                ,
                "Licenciada en psicología por la U.C.M en 2007",
                "Psicóloga colegiada M-29142",
                "Formación en terapia sexual y de pareja (Fundación sexpol)",
                "Psicoterapeuta Gestalt (EMTG)",
              ],
            },
            {
              name: "Dña. Mar García Merino",
              title: "Secretaria y administrativa",
              avatar: `${mar}`,
              description: [],
            },
          ].map((item, i) => (
            // <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box
              component={Card}
              padding={2}
              boxShadow={0}
              bgcolor={"transparent"}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={"100%"}
                height={"100%"}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={"transparent"}
                marginTop={-5}
              >
                <Box component={Card} borderRadius={2} sx={{ height: 160 }}>
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} sx={{minHeight: 70}} />
                    <Grid container alignItems="center" marginTop={2}>
                      {item.linkedIn && (
                        <Grid item xs>
                          <Box>
                            <IconButton
                              aria-label="facebook"
                              size={"small"}
                              onClick={(e) =>
                                handleLinkToLinkedIn(item.linkedIn)
                              }
                            >
                              <LinkedinIcon />
                            </IconButton>
                          </Box>
                        </Grid>
                      )}
                      <Grid item>
                        <Box
                          component={CardActions}
                          justifyContent={"flex-end"}
                        >
                          {/* <Button size="small" onClick={() => handleClick()}>Conoce más</Button> */}
                          {/* <Link
                            component={'a'}
                            color={'primary'}
                            href={'/professional-view'}
                            underline={'none'}
                            state={{ description: 'occupation' }}
                          >
                            Sign up here.
                          </Link> */}
                          {item.name !== "Dña. Mar García Merino" && (
                            <Link
                              to={{
                                pathname: "/professional-view",
                                state: {
                                  professional: item,
                                },
                              }}
                            >
                              Más información
                            </Link>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Box>
              </Box>
            </Box>
            // </Grid>
          ))}
          {/* </Grid> */}
        </Slider>
      </Box>
    </Box>
  );
};

export default Professionals;
