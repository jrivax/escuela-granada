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
import creenciasDanianCreenciasSanas from 'img/libros/creenciasDanianCreenciasSanas.png';
import miedoAlBienestar from 'img/libros/miedoAlBienestar.jpg';
import laLlaveOlvidada from 'img/libros/laLlaveOlvidada.png';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Courses = (props) => {
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
                color={theme.palette.secondary.main}
                fontStyle={'italic'}
                variant={'h4'}
                align={'center'}
                gutterBottom
                data-aos="fade-up"
              >
                Cursos
              </Box>
            </Box>
            <Grid container spacing={2}>
              {[
                {
                  title: 'Entrenamiento en Relajación Creativa - Dr. Herrero Lozano, Eugenio.',
                  description: [
                    'Impartimos cursos diseñados por nosotros, dirigidos a personas interesadas en el desarrollo de la salud emocional. De ahí nuestra idea de "Enseñamos Salud',
                    'Los cursos están organizados secuencialmente. El curso base sobre el que se apoya toda la estructura de nuestro trabajo es el Entrenamiento en Relajación Creativa.',
                    'Éste es complementado con el curso de Entrenamiento en Habilidades Emocionales.',
                    'A partir de este nivel se pueden realizar dos itinerarios:',
                    'Uno dirigido al desarrollo de la Consciencia, profundizando en la relajación y la meditación. Son los cursos de Consciencia Creativa, Consciencia de la Consciencia y Consciencia de la Unidad.',
                    'Por otro lado tenemos los cursos de Creencias y de Miedo al Bienestar, orientados al trabajo con las emociones y pensamientos que nos dañan.',
                    'De algunos de estos cursos se realizan Reuniones de Seguimiento periódicas en las que se trabaja a un nivel más profundo las estrategias aprendidas en los diferentes cursos.'
                  ],
                  date: '1987'
                }
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
                      component={CardContent}
                      bgcolor={'transparent'}
                      marginTop={-5}
                    >
                      <Box component={Card} borderRadius={2} paddingLeft={5} boxShadow={'8px 8px 8px 0px rgb(140 152 164 / 25%)'}>
                        <CardContent>
                          <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            align={'center'}
                          >
                          </Box>
                          <Box marginTop={1}>
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
                                      <ArrowRightIcon color={"secondary"} />
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

export default Courses;