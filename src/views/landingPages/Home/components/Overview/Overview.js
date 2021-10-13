/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { colors } from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

const Overview = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Centro de Psicoterapia Médica y de Terapia Holística
        </Box>
        <Typography align={'center'} color="textSecondary" variant={'subtitle1'}>
          Fundado en el año 1985 (por el Dr. Eugenio Herrero Lozano y el Dr. Julio Herrero Lozano entre otros profesionales) y constituido por un equipo multidisciplinar de profesionales (médicos, psicólogos, psiquiatras y fisioterapeutas).
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: 'Base de trabajo',
            subtitle: 'Entendemos la salud holísticamente, de una forma integral y, por eso, trabajamos con el cuerpo, la mente (emociones-pensamiento) y el espíritu, buscando el equilibrio y las respuestas en el interior de uno mismo (a través del trabajo Psicoterapéutico).',
            explanation: 'Impartimos cursos de formación y entrenamiento en diversas técnicas psicoterapéuticas que utilizamos para generar equilibrio en el interior del ser humano.',
            icon: (
              <DeviceHubIcon />
            ),
            color: colors.blueGrey,
            lessons: [
            ],
          },
          {
            title: 'Terapia individual',
            subtitle: 'gergqegqe',
            explanation: [
              'Se abordan de forma individualizada trastornos derivados del desequilibrio emocional y mental que generan problemas como ansiedad, depresión, estrés, ira y sus manifestaciones tanto en nuestro cuerpo como en el entorno.',
              'Los trastornos más habituales son:',
            ],
            icon: (
              <PersonIcon />
            ),
            color: colors.lightBlue,
            lessons: [
              'Ansiedad y estrés.',
              'Depresión.',
              'Fobias.',
              'Obsesiones.',
              'Problemas en las relaciones sociales.',
              'Disfunciones sexuales.',
              'Alcohoslimo, tabaquismo y conductas adictivas.',
              'Enfermedades psicosomáticas.'
            ],
          },
          {
            title: 'Terapia grupal',
            subtitle: [
              'Los grupos de apoyo emocional son estructuras de trabajo para personas interesadas en crecer hacia el bienestar emocional',
              'Se realizan en grupos de 6 a 12 personas que se reúnen periódicamente, acompañados de terapeutas expertos en técnicas de apoyo emocional.',
              'De este modo se consolidan y se practican las herramientas aprendidas en los diferentes cursos impartidos en este centro.'
            ],
            icon: (
              <GroupIcon />
            ),
            color: colors.pink,
            lessons: [
              'Lesson 1: Doloremque laudantium, totam error.',
              'Lesson 2: Natus error sit voluptatem',
              'Lesson 3: Totam rem aperiam, eaque ipsa.',
              'Lesson 4: Accusantium doloremque laudantium, totam rem',
            ],
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Grid
              container
              spacing={isMd ? 4 : 2}
              flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-right' : 'fade-up'}
              >
                <Box
                  component={Card}
                  display={'flex'}
                  alignItems={'center'}
                  width={'100%'}
                  height={'100%'}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 900]}
                  boxShadow={0}
                >
                  <CardContent>
                    <Box
                      component={Avatar}
                      width={50}
                      height={50}
                      marginBottom={6}
                      bgcolor={item.color[themeMode === 'light' ? 900 : 50]}
                      boxShadow={4}
                    >
                      <Box color={item.color[themeMode === 'light' ? 50 : 900]}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box
                      component={Typography}
                      variant={'h6'}
                      gutterBottom
                      fontWeight={500}
                    >
                      {item.title}
                    </Box>

                    <Grid container spacing={2}>
                      {(i === 0 || i === 2) ? (
                        Array.isArray(item.subtitle) ? item.subtitle.map((oneSb, z) => (
                          <Grid item>
                            <Typography key={z} color="text.secondary">
                              {oneSb}
                            </Typography>
                          </Grid>
                        )) :
                          <Grid item>
                            {item.subtitle}
                          </Grid>
                      ) : (
                        Array.isArray(item.explanation) ? item.explanation.map((oneEx, z) => (
                          <Grid item>
                            <Typography key={z} color="text.secondary">
                              {oneEx}
                            </Typography>
                          </Grid>
                        )) :
                          <Grid item>
                            {item.explanation}
                          </Grid>
                      )
                      }
                    </Grid>
                  </CardContent>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-left' : 'fade-up'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  width={'100%'}
                  height={'100%'}
                >
                  <Box marginBottom={2}>
                    <Box
                      component={Typography}
                      variant={'h4'}
                      gutterBottom
                      fontWeight={600}
                    >
                      {item.title}
                    </Box>
                    <Grid container spacing={2}>
                      {(i === 0 || i === 2) ? (
                        Array.isArray(item.explanation) ? item.explanation.map((oneEx, z) => (
                          <Grid item>
                            <Typography key={z} color="text.secondary">
                              {oneEx}
                            </Typography>
                          </Grid>
                        )) :
                          <Grid item>
                            {item.explanation}
                          </Grid>

                      ) : (
                        Array.isArray(item.explanation) ? item.explanation.map((oneSb, z) => (
                          <Grid item>
                            <Typography key={z} color="text.secondary">
                              {oneSb}
                            </Typography>
                          </Grid>
                        )) :
                          <Grid item>
                            {item.explanation}
                          </Grid>
                      )
                      }
                    </Grid>
                  </Box>
                  <Grid container spacing={1}>
                    {item.lessons.map((lesson, j) => (
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
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Overview.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Overview;
