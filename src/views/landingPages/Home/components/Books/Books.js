import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import { Box } from '@mui/system';
import Container from 'common/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { colors } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

import entrenamientoRelajacionCreativa from 'img/libros/relajacionCreativa.png';
import sabiduriaDeLasEmociones from 'img/libros/sabiduriaDeLasEmociones.png';

const Books = (props) => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Box>
            <Box marginBottom={4}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
                align={'center'}
              >
                Libros publicados por miembros del Equipo de la Escuela Granada.
              </Typography>
              <Box
                component={Typography}
                fontWeight={700}
                variant={'h3'}
                align={'center'}
                gutterBottom
                data-aos="fade-up"
              >
                LIBROS
              </Box>
            </Box>
            <Grid container spacing={2}>
              {[
                {
                  avatar: `${entrenamientoRelajacionCreativa}`,
                  title: 'Entrenamiento en Relajación Creativa - Dr. Herrero Lozano, Eugenio.',
                  description: [
                    'El Entrenamiento en Relajación Creativa es una técnica compuesta de una serie de ejercicios escalonados, que enseña a conseguir un estado de relajación, física y mental, y a desarrollar el uso de la imaginación en beneficio propio.',
                    'En el texto se encuentran las explicaciones y descripciones necesarias para la correcta comprensión de la técnica. La práctica de los ejercicios se realiza con la ayuda de la grabación, que contiene relajaciones y visualizaciones guiadas por el propio autor.',
                    'Además, en distintas partes del texto se dan sugerencia e indicaciones de cómo y para qué usar esta técnica: mejorar el rendimiento en el trabajo o los estudios; técnicas de autocuración y de incremento de la Salud Psicosomática; control de hábitos (tabaco, obesidad, timidez); eliminación de la angustia, tensión y estrés; como incrementar las capacidades para conseguir mejores resultados en cualquier actividad, etc.'
                  ],
                  date: '1987',
                  duration: '30 mins',
                  tag: 'Devices',
                },
                {
                  avatar: `${sabiduriaDeLasEmociones}`,
                  title: 'La Sabiduría de las Emociones. Entrenamiento en Consciencia Creativa. - Dr. Herrero Lozano, Eugenio y Dr. Herrero Lozano, Julio',
                  description: [
                    '“Piensa bien y vivirás mejor”, en contra de la afirmación del célebre refrán, “piensa bien y acertarás”. Y ¿qué es “pensar bien”? No existe ningún “Código del Pensamiento” que nos diga cuál es la forma correcta.',
                    'Basándose en algunas descripciones y, sobre todo, en ejercicios prácticos ayudados de la grabación que acompaña al libro, se desarrolla un sistema de observación y toma de consciencia de los valiosos indicadores internos hacia el bienestar: las emociones como guía, pues dentro de cada uno existe una brújula individual, una gran “sabiduría de las emociones” que nos indica el “código personal del pensamiento”.',
                    'A través del entrenamiento para lograr el equilibrio en el cuerpo, las emociones y los pensamientos, se alcanza la mejoría cuerpo-mente o Salud Psicosomática, eficaz ante los problemas de ansiedad (estrés, angustia, inseguridad, timidez, fobias, obsesiones), tristeza (depresión, agotamiento físico e intelectual) y enfado, así como sus manifestaciones en problemas de relación y autoestima.',
                    'Las ideas condensadas en este libro – aprender a pensar correctamente – podrían ser materia de enseñanza en los centros de educación infantil, de esta forma se evitaría una enorme cantidad de sufrimiento inútil.',
                    'Este libro es la continuación de Entrenamiento en Relajación Creativa, primera obra del mismo autor, creador de ambas técnicas.'
                  ],
                  date: '2000',
                  duration: '50 mins',
                  tag: 'Devices',
                },
                {
                  title: 'Ep 2: Interview with Elon Musk, CEO of Tesla',
                  subtitle:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium est ipsum dictum lectus mauris netus. Diam sed sit quisque facilisi luctus feugiat.',
                  date: 'June 14, 2021',
                  duration: '1 hour',
                  tag: 'Tech',
                },
                {
                  title: 'Ep 1: Introducing the new season of Radio Podcast',
                  subtitle:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium est ipsum dictum lectus mauris netus. Diam sed sit quisque facilisi luctus feugiat.',
                  date: 'June 15, 2021',
                  duration: '2 hours',
                  tag: 'News',
                },
              ].map((item, i) => (
                <Grid item xs={12} key={i} data-aos={'fade-up'}>
                  <Box
                    component={Card}
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    variant={'outlined'}
                    padding={2}
                    boxShadow={0}
                    bgcolor={'transparent'}
                    border={0}
                    sx={{
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        transform: `translateY(-${theme.spacing(1 / 2)})`,
                      },
                    }}
                  >
                    <Box
                      component={CardMedia}
                      borderRadius={2}
                      width={'100%'}
                      height={'100%'}
                      minHeight={260}
                      image={item.avatar}
                    />
                    <Box
                      component={CardContent}
                      bgcolor={'transparent'}
                      marginTop={-5}
                    >
                      <Box component={Card} borderRadius={2} >
                        <CardContent>
                          <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            align={'center'}
                          >
                            <Box>
                              <Typography variant={'subtitle2'}>
                                {item.date} - {item.duration}
                              </Typography>
                            </Box>
                          </Box>
                          <Box marginTop={1}>
                            <Typography variant={'h6'} gutterBottom>
                              <Box fontWeight={600}>{item.title}</Box>
                            </Typography>
                            <Grid container spacing={1}>
                              {item.description?.map((lesson, j) => (
                                <Grid item xs={12} key={j}>
                                  <Box
                                    component={ListItem}
                                    disableGutters
                                    width={'auto'}
                                    padding={0}
                                  >
                                    <Box
                                      component={ListItemAvatar}
                                      minWidth={'auto !important'}
                                      marginRight={2}
                                    >
                                      <Box
                                        component={Avatar}
                                        bgcolor={theme.palette.secondary.main}
                                        width={20}
                                        height={20}
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
                                      </Box>
                                    </Box>
                                    <ListItemText primary={lesson} />
                                  </Box>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </CardContent>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Container>
      </Box>
    </Box>
  )
}

export default Books;