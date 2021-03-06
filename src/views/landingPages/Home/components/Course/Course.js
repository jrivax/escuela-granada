import React, { useState } from "react";
import { useTheme, alpha } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import Container from "common/Container";
// import { Professionals } from 'views/landingPages/Home/components/Professionals';
import backgroundImage from "img/camino_salud_2.jpg";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const cursos = [
  {
    header: [
      { nombre: "Entrenamiento en relajación creativa" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "Entrenamiento en Relajación Creativa" },
      { tipoCurso: "Reunión de seguimiento" },
      { requisitosPrevios: "" },
      {
        quien: [
          "Dra. Ester Herrero Martín",
          "Dña. Clara Giménez del Olmo",
          "Dra. María Herrero Martín",
        ],
      },
    ],
    queEs: [
      "Una técnica especialmente sencilla y eficaz para aprender a llegar al estado de Relajación a través de la relajación física y, además, a utilizar la imaginación en beneficio propio.",
    ],
    paraQue: [
      "Aprender a relajarse de forma autónoma en cualquier lugar, situación y postura.",
      "Disminuir las tensiones cotidianas responsables de muchos de los problemas de salud que padecemos.",
      "Aprender a inducir serenidad en nosotros mismos.",
      "Utilizar la imaginacion en beneficio propio.",
      "Experimentar el cuerpo como fuente de salud y bienestar.",
    ],
    como: [
      "El entrenamiento se realiza en grupo, sentados y con la ropa de calle para, desde el principio, aprender a relajarse en circunstancias habituales cotidianas.",
      "Se dan explicaciones teóricas y, sobre todo, se realizan ejercicios prácticos, creando entre todos un ambiente de seguridad y confianza.",
    ],
  },
  {
    header: [
      { nombre: "Habilidades Emocionales" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "La Sabiduría de las Emociones" },
      { tipoCurso: "" },
      { requisitosPrevios: "Curso de Entrenamiento en Relajación Creativa" },
      {
        quien: [
          "Dra. Ester Herrero Martín",
          "Dña. Clara Giménez del Olmo",
          "Dra. María Herrero Martín",
        ],
      },
    ],
    queEs: [
      "'Piensa bien y vivirás mejor', resume el objetivo de las técnicas empleadas en nuestra psicoterapia, que desarrolla un sistema de observación de 'las emociones como guía' para lograr el equilibrio integral de la persona: cuerpo, emociones y pensamiento.",
    ],
    paraQue: [
      "Para aquellas personas, entrenadas en Relajación Creativa, y que desean seguir ampliando y profundizando en el conocimiento de sí mismos para desarrollar herramientas internas que les ayuden a vivir mejor.",
    ],
    como: [
      "El entrenamiento se realiza en grupo, sentados y con la ropa de calle en grupos de 20 personas aproximadamente.",
    ],
  },
  {
    header: [
      { nombre: "Creencias creativas" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "Creencias que Dañan, Creencias que Sanan." },
      { tipoCurso: "Grupo de terapia" },
      {
        requisitosPrevios:
          "Entrenamiento en Relajación Creativa y Habilidades Emocionales.",
      },
      {
        quien: ["Dr. Julio Herrero Lozano"],
      },
    ],
    queEs: [
      `"Piensa lo que deseas en lugar de lo que temes".
      En este curso aprendemos herramientas para conocer e identificar en nosotros mismos el origen de la mayor parte de nuestro sufrimiento, las Creencias Dañinas Básicas.`,
      "Mediante la experiencia personal de cada uno encontraremos sus soluciones verdaderas, las Creencias Saludables, para poder llegar a conocer y entender el sentido de la vida.",
    ],
    paraQue: [
      "Va dirigido a todas aquellas personas entrenadas en la técnica de Relajación Creativa, y en el conocimiento de sí mismos a través de las herramientas adquiridas en el curso de Habilidades Emocionales.",
    ],
    como: [
      "Nos reuniremos en grupos durante 10 horas en total. Se mostrará y desarrollará de forma teórica y práctica toda la información recogida en el libro Creencias que Dañan, Creencias que Sanan, del Dr. Julio Herrero Lozano.",
    ],
  },
  {
    header: [
      { nombre: "Miedo al bienestar" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "Creencias que Dañan, Creencias que Sanan." },
      { tipoCurso: "" },
      {
        requisitosPrevios: "Curso de Creencias que Dañan. Creencias que sanan.",
      },
      {
        quien: ["Dr. Julio Herrero Lozano"],
      },
    ],
    queEs: [
      `Este curso es continuación del curso Creencias Creativas, técnica original del Dr. Julio Herrero Lozano.`,
    ],
    paraQue: [
      "Cuando hemos puesto en duda y eliminado las Creencias dañinas sustituyéndolas por aquellas otras saludables, puede quedar un resto de malestar y surgir la pregunta: ¿Por qué si deseo, y ya sé estar bien, continúo estando mal? Aunque extraña, muchas veces la respuesta es: tengo miedo a estar bien.",
    ],
    como: [
      "Nos reuniremos en grupos durante 10 horas en total en grupos de 20 personas.",
    ],
  },
  {
    header: [
      { nombre: "Consciencia creativa" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "La Sabiduría de las Emociones." },
      { tipoCurso: "Reunión de seguimiento" },
      { requisitosPrevios: "Curso de Habilidades Emocionales." },
      {
        quien: [
          "Dra. Ester Herrero Martín",
          "Dña. Clara Giménez del Olmo",
          "Dra. María Herrero Martín",
        ],
      },
    ],
    queEs: [
      `Continuamos en este curso el desarrollo y práctica iniciadas con el Entrenamiento en Relajación Creativa y Entrenamiento en Habilidades Emocionales.`,
    ],
    paraQue: [
      "Para aquellas personas que desean obtener un entrenamiento práctico en las técnicas aprendidas en los cursos anteriores y concretar el equilibrio cuerpo- mente con ejercicios que nos conducen a la paz interior y exterior.",
    ],
    como: [
      "El entrenamiento se realiza en grupo, sentados y con la ropa de calle en grupos de 20 personas aproximadamente.",
    ],
  },
  {
    header: [
      { nombre: "Consciencia de la consciencia" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "" },
      { tipoCurso: "Reunión de seguimiento: tercer viernes de cada mes." },
      { requisitosPrevios: "Curso de Consciencia Creativa." },
      {
        quien: ["Dr. Julio Herrero Lozano"],
      },
    ],
    queEs: [
      `Este curso es continuación del Entrenamiento en Relajación Creativa, Habilidades Emocionales y Consciencia Creativa, técnicas originales de los Drs. Eugenio Herrero Lozano y Julio Herrero Lozano.`,
    ],
    paraQue: [
      `Para alcanzar el contacto con el conocimiento interno, origen de la "sabiduría de las emociones" que nos permite crecer en el equilibrio.`,
    ],
    como: [
      "El entrenamiento se realiza grupos de 20 personas aproximadamente.",
    ],
  },
  {
    header: [
      { nombre: "Consciencia de la unidad" },
      { duracion: "10 horas (5 sesiones semanales de 2h)" },
      { libro: "Consciencia de la Unidad" },
      { tipoCurso: "" },
      { requisitosPrevios: "Curso de Consciencia de la Consciencia." },
      {
        quien: ["Dr. Julio Herrero Lozano"],
      },
    ],
    queEs: [
      `Este curso es continuación del Entrenamiento en Relajación Creativa, Habilidades Emocionales, Consciencia Creativa y Consciencia de la Consciencia, técnicas originales de los Drs. Eugenio Herrero Lozano y Julio Herrero Lozano.`,
    ],
    paraQue: [
      `Desde el contacto con el conocimiento interno en el Observador podemos tomar consciencia de la conexión con nuestros semejantes, base de la integración como células de ese ser vivo al que llamamos Tierra.`,
    ],
    como: [
      "El entrenamiento se realiza grupos de 20 personas aproximadamente.",
    ],
  },
];

const getCourse = (title) => {
  const course = cursos.filter((curso) => curso.header[0].nombre === title);
  return course[0];
};
const Course = ({ themeMode = "light" }) => {
  const { courseTitle } = useLocation().state;
  const [course, setCourse] = useState(getCourse(courseTitle));
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Box>
            <Box marginBottom={4}>
              <Box
                component={Typography}
                fontWeight={700}
                variant={"h4"}
                gutterBottom
                align={"center"}
              >
                {courseTitle}
              </Box>
              {/* <Typography
                variant={'h6'}
                component={'p'}
                color={'textSecondary'}
                align={'center'}
                data-aos="fade-up"
              >
                Creemos en el trabajo en equipo
              </Typography> */}
            </Box>
            {/* <Slider {...sliderOpts} > */}
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  width={{ xs: 350, md: 500 }}
                  sx={{ display: "flex" }}
                  component={CardContent}
                >
                  <Box component={Card} borderRadius={2}>
                    <CardContent>
                      <Grid container>
                        {course.header.map((element, j) => {
                          return (
                            element[Object.keys(element)] && (
                              <Grid item xs={12} key={j}>
                                <Box
                                  component={ListItem}
                                  disableGutters
                                  width={"auto"}
                                  padding={0}
                                >
                                  <Box
                                    component={ListItemAvatar}
                                    minWidth={"auto !important"}
                                    marginRight={2}
                                  >
                                    {/* <Box
                                      component={Avatar}
                                      bgcolor={theme.palette.secondary.main}
                                      width={15}
                                      height={15}
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </Box> */}
                                  </Box>
                                  <ListItemText
                                    primary={
                                      Object.keys(element) == "quien" ? (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            direction: "row",
                                            width: "fit-content",
                                            gap: "16px",
                                            alignItems: "center",
                                          }}
                                        >
                                          <Box>
                                            <Typography
                                              variant={"subtitle1"}
                                              color="primary"
                                              fontWeight={700}
                                            >
                                              {"Quien lo imparte"}
                                            </Typography>
                                          </Box>
                                          <Box>
                                            {element[Object.keys(element)].map(
                                              (eq, j) => {
                                                return (
                                                  <Grid item xs={12} key={j}>
                                                    <Typography
                                                      variant={"subtitle1"}
                                                    >
                                                      {eq}
                                                    </Typography>
                                                  </Grid>
                                                );
                                              }
                                            )}
                                          </Box>
                                        </Box>
                                      ) : (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            direction: "row",
                                            width: "fit-content",
                                            gap: "16px",
                                          }}
                                        >
                                          <Typography
                                            variant={"subtitle1"}
                                            color="primary"
                                            fontWeight={700}
                                          >
                                            {Object.keys(element) == "nombre"
                                              ? "Nombre: "
                                              : Object.keys(element) ==
                                                "duracion"
                                              ? "Duración: "
                                              : Object.keys(element) == "libro"
                                              ? "Libro: "
                                              : Object.keys(element) ==
                                                "tipoCurso"
                                              ? "Tipo de curso: "
                                              : Object.keys(element) ==
                                                "requisitosPrevios"
                                              ? "Requisitos previos: "
                                              : Object.keys(element) == "quien"
                                              ? "Quien lo imparte: "
                                              : ""}
                                          </Typography>

                                          <Typography variant={"subtitle1"}>
                                            {element[Object.keys(element)]}
                                          </Typography>
                                        </Box>
                                      )
                                    }
                                  />
                                </Box>
                              </Grid>
                            )
                          );
                        })}
                      </Grid>
                    </CardContent>
                  </Box>
                </Box>
                {/* </Box> */}
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
                  <Box
                    width={{ xs: 300, md: 500 }}
                    sx={{ display: "flex" }}
                    component={CardContent}
                  >
                    <Box component={Card} borderRadius={2}>
                      <Box
                        mt={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant={"h5"}
                          fontWeight={"900"}
                          fontStyle={"italic"}
                          color="primary"
                        >
                          {"¿ Qué es ?"}
                        </Typography>
                      </Box>
                      <CardContent>
                        <Grid container gap={2}>
                          {course.queEs.map((element, j) => {
                            return (
                              <Grid item xs={12} key={j}>
                                <Typography variant={"subtitle1"}>
                                  {element}
                                </Typography>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardContent>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    width={{ xs: 300, md: 500 }}
                    sx={{ display: "flex" }}
                    component={CardContent}
                  >
                    <Box component={Card} borderRadius={2}>
                      <Box
                        mt={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant={"h5"}
                          fontWeight={"900"}
                          fontStyle={"italic"}
                          color="primary"
                        >
                          {"¿ Para qué sirve ?"}
                        </Typography>
                      </Box>
                      <CardContent>
                        <Grid container gap={2}>
                          {course.paraQue.map((element, j) => {
                            return (
                              <Grid item xs={12} key={j}>
                                <Typography variant={"subtitle1"}>
                                  {element}
                                </Typography>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardContent>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Box
                    width={{ xs: 300, md: 500 }}
                    sx={{ display: "flex" }}
                    component={CardContent}
                  >
                    <Box component={Card} borderRadius={2}>
                      <Box
                        mt={1}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant={"h5"}
                          fontWeight={"900"}
                          fontStyle={"italic"}
                          color="primary"
                        >
                          {"¿ Cómo lo hacemos ?"}
                        </Typography>
                      </Box>
                      <CardContent>
                        <Grid container gap={2}>
                          {course.como.map((element, j) => {
                            return (
                              <Grid item xs={12} key={j}>
                                <Typography variant={"subtitle1"}>
                                  {element}
                                </Typography>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </CardContent>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Grid container direction="row" spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={3} data-aos={"fade-left"}></Grid>
            </Grid>
            {/* </Slider> */}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Course;
