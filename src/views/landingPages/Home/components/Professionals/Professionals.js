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
              title: "M??dico Psiquiatra y Neur??logo. Psicoterapeuta.",
              avatar: `${eugenio}`,
              description: [
                "El Dr. Eugenio Herrero fue m??dico especialista en Psiquiatr??a y Neurolog??a, diplomado en Sofrolog??a M??dica, miembro fundador del Instituto de Estudios Psicosom??ticos y Psicoterapia M??dica, miembro fundador y presidente de la asociaci??n Internacional de Terapias Hol??sticas Tradicionales, entre otras titulaciones y cargos.",
                "Desde 1971 dict?? cursos de relajaci??n para m??dicos, psic??logos y pacientes en el Hospital Provincial de Madrid. Desde 1981 dirigi?? seminarios te??rico-pr??cticos sobre t??cnicas de relajaci??n e hipnosis, as?? como grupos de terapia de relajaci??n, en el Hospital Central de la Cruz Roja de Madrid.",
                "Fue el creador de la t??cnica de Relajaci??n Creativa que se sigue impartiendo en la Escuela Granada.",
              ],
            },
            {
              name: "Dr. Julio Herrero Lozano",
              title: "M??dico Psiquiatra. Psicoterapeuta.",
              avatar: `${julioHerrero}`,
              description: [
                "Curs?? sus estudios de Medicina hasta licenciarse en el a??o 1972 en la Universidad Complutense de Madrid, desarrollando su actividad como m??dico de familia e internista en el Hospital Cl??nico San Carlos.",
                "En 1975 se especializ?? en Psiquiatr??a, ejerciendo como m??dico psiquiatra y psicoterapeuta desde entonces.",
                "M??dico del Ayuntamiento de Madrid desde 1974, ocup?? la plaza de Psiquiatr??a de la Beneficencia Municipal desde 1980 hasta la desaparici??n de la misma en 1993 y, desde entonces, desarrolla su actividad en el ??mbito individual y de grupo, impartiendo cursos de Entrenamiento en Relajaci??n Creativa y Habilidades Emocionales as?? como grupos de Apoyo Emocional para los distintos Programas Municipales (Funcionarios, Menopausia, Obesidad, Pacientes Seropositivos, etc.)",
                "Miembro Fundador del centro de Psicoterapia M??dica Escuela Granda en Madrid donde ejerce como Psiquiatra y Psicoterapeuta.",
                "Ganador del lV premio Madrid Previene por el proyecto: ???Evaluaci??n de los resultados obtenidos tras la aplicaci??n a poblaci??n de alto riesgo emocional del proyecto G.E.R.C.H.E. para la prevenci??n en Salud Laboral de la Polic??a Municipal???",
              ],
            },
            {
              name: "D??a. Clara Gim??nez del Olmo",
              title: "Psic??logo Psicoterapeuta",
              avatar: `${clara}`,
              description: [
                ,
                "Licenciada en Psicolog??a por la Universidad complutense de Madrid en 1982.",
                "Formaci??n en Psicoterapia Cognitiva en el Servicio de psiquiatr??a del Hospital Central Cruz Roja Espa??ola de Madrid. 1982-1986",
                "1982-1987. Psic??logo Cl??nico formando parte del equipo terap??utico del Hospital Central Cruz Roja Espa??ola de Madrid. Dirigido por el Dr. Esteban Acosta Lorenzo.",
                "1984-1985. Formaci??n en An??lisis y T??cnicas de Modificaci??n de Conducta. Terapia Marital y Familiar. Trastornos Psicosom??ticos en Madrid. I.A.M.C.O.",
                "Miembro  fundador del Centro de Psicoterapia M??dica Escuela Granada en Madrid, donde ejerce como Psic??logo Psicoterapeuta desde 1985, realizando diversas actividades terap??utico- docentes.",
                "Formadora de Monitores en la t??cnica de Entrenamiento en Relajaci??n Creativa (Dr. Eugenio Herrero Lozano), tanto para adultos como infantil.",
                "Practitioner en Programaci??n Neuroling????stica. 2001.",
                "Entrenadora oficial EMDR INSTITUTE para Espa??a. INSTITUTE USA Francine Sapiro",
              ],
            },
            {
              name: "Dra. Ester Herrero Mart??n",
              title: "M??dico Psicoterapeuta",
              avatar: `${ester}`,
              description: [
                "Licenciada en Medicina y Cirug??a (Universidad Complutense de Madrid)",
                "Especialista en Medicina Familiar y Comunitaria (Hospital Ram??n y Cajal)",
                "M??dico en Madrid Salud (Ayuntamiento de Madrid)",
                "Monitora de los Cursos de Entrenamiento en Relajaci??n Creativa, Habilidades Emocionales y Consciencia Creativa",
                "Master en Psicoterapia Individual y de Grupo (Universidad Pontificia de Comillas de Madrid)",
                "Experta en Terapia Centrada en la Persona, Gestalt, Focusing, Bioenerg??tica y Medicina Psicosom??tica",
                "Master en Programaci??n Neuroling????stica",
              ],
            },
            {
              name: "Dra. Mar??a Herrero Mart??n",
              title: "M??dico Psic??loga. Psicoterapeuta",
              avatar: `${maria}`,
              description: [
                "Licenciada en Psicolog??a por la Universidad Aut??noma de Madrid ",
                "Licenciada en Medicina y Cirug??a por la Universidad Complutense de Madrid ",
                "M??ster en Psicoterapia Individual y de Grupo por la Universidad Pontificia de Comillas de Madrid",
                "Experta en Terapia centrada en el cliente, Gestalt, Focusing, Bioenerg??tica y Medicina Psicosom??tica",
                "Monitora de la T??cnica Entrenamiento en Relajaci??n Creativa para adultos, impartiendo la tecnica en diferentes centros. Entre ellos en el CIFSE (centro destinado a la capacitaci??n y el entrenamiento del personal de los Cuerpos y Servicios de Seguridad, Emergencias y Movilidad.Centro Integral de Formaci??n de Seguridad y Emergencias) del Ayuntamiento de Madrid",
                "Monitora de la tecnica Entrenamiento  en Relajaci??n Creativa online",
                "Monitora de la T??cnica Entrenamiento en Relajaci??n Creativa para Adolescentes",
                "Monitora de la T??cnica Entrenamiento en Relajaci??n Creativa Infantil",
                "Experiencia de m??s de 15 a??os como psicoterapeuts haciendo terapias individuales y terapias de grupo",
              ],
            },
            {
              name: "Noelia Casas Gim??nez",
              title: "Psic??loga infanto-juvenil",
              avatar: `${noelia}`,
              description: [
                "Licenciada en Psicolog??a por la Universidad Aut??noma de Madrid.",
                "Master en Psicolog??a infantil, adolescencia y juventud en el Instituto de Lenguaje y Desarrollo (I.L.D).",
                "Formaci??n especializada y experiencia en diagn??stico e intervenci??n en Trastornos emocionales, conductuales y Trastornos de alimentaci??n. Centro Agora.",
                "Formaci??n especializada y experiencia en diagn??stico e intervenci??n en Altas Capacidades. Centro Agora.",
                "Experto en psicoterapia breve en ni??os, adolescentes y j??venes. Sociedad Espa??ola de Medicina Psicosom??tica.SEMPYP.",
                "Experto en TDAH por la Escuela del Dr. Barkley y Fundaci??n educaci??n activa.",
                "Especialista en Trastornos de aprendizaje y Terapia del Lenguaje en la infancia, adolescencia y juventud. Fundaci??n ICSE.",
                "Experto en intervenci??n en trauma con EMDR. Sociedad Espa??ola de Medicina Psicosom??tica. SEMPYP.",
                "Especialista en Atenci??n Temprana por la Fundaci??n ICSE.",
                "Educadora de masaje infantil en beb??s de 2 a 8 meses de edad, para favorecer el v??nculo afectivo entre padres e hijos. Asociaci??n Espa??ola de Masaje Infantil.",
              ],
            },
            {
              name: "D??a. Guadalupe Mena Rodriguez",
              title: "Psic??loga sanitaria",
              avatar: `${guadalupe}`,
              description: [
                "Psic??loga sanitaria por la Universidad Complutense de Madrid",
                "Experta en trastornos de ansiedad y sintomatolog??a depresiva en adultos ",
                "Experta en adicciones ",
                "Experta en poblaci??n infanto-juvenil",
              ],
              linkedIn: "linkedin.com/in/guadalupe-mena-rodr??guez-964317124",
            },
            {
              name: "D??a. Bel??n P??rez de la Oliva",
              title: "Psic??loga Psicoterapeuta",
              avatar: `${belen}`,
              description: [
                ,
                "Licenciada en psicolog??a por la U.C.M en 2007",
                "Psic??loga colegiada M-29142",
                "Formaci??n en terapia sexual y de pareja (Fundaci??n sexpol)",
                "Psicoterapeuta Gestalt (EMTG)",
              ],
            },
            {
              name: "D??a. Mar Garc??a Merino",
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
                          {/* <Button size="small" onClick={() => handleClick()}>Conoce m??s</Button> */}
                          {/* <Link
                            component={'a'}
                            color={'primary'}
                            href={'/professional-view'}
                            underline={'none'}
                            state={{ description: 'occupation' }}
                          >
                            Sign up here.
                          </Link> */}
                          {item.name !== "D??a. Mar Garc??a Merino" && (
                            <Link
                              to={{
                                pathname: "/professional-view",
                                state: {
                                  professional: item,
                                },
                              }}
                            >
                              M??s informaci??n
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
