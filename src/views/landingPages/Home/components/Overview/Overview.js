/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { alpha, Box } from '@mui/system';
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

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Overview = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Box>
      <Box marginBottom={4} mt={4}>
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
          Fundado en el año 1985 (por el Dr. Eugenio Herrero Lozano, el Dr. Julio Herrero Lozano y Dña. Clara Giménez del Olmo) y constituido por un equipo multidisciplinar de profesionales (médicos, psicólogos y psiquiatras).
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: 'Base de trabajo',
            subtitle: [
              'Entendemos la salud holísticamente, de una forma integral y, por eso, trabajamos con, la mente (pensamiento-emoción), el cuerpo y el espíritu, buscando el equilibrio y las respuestas en el interior de uno mismo (a través del trabajo Psicoterapéutico).'
            ],
            explanation: [
              // 'Impartimos cursos de formación y entrenamiento en diversas técnicas psicoterapéuticas que utilizamos para generar equilibrio en el interior del ser humano.',
              'Disponemos de:'
            ],
            icon: (
              <DeviceHubIcon />
            ),
            color: colors.blueGrey,
            lessons: [
              , "Terapia individual"
              , "Terapia familiar"
              , "Terapia online"
              , "Terapia infantil y juvenil"
              , "Terapia para personas mayores"
              , "Terapia de pareja"
              , "Terapia grupal"
              , "Cursos de formación"
            ],
          },
          {
            title: 'Terapia individual',
            subtitle: [
              'Con frecuencia en terapia individual las personas acuden a consulta por problemas de ansiedad, estrés, bajo estado de ánimo e ira, y sus manifestaciones tanto en el cuerpo como en el entorno.'
              ,'Pero cada vez más personas, con buena salud mental, buscan a un psicólogo porque quieren mejorar sus habilidades sociales y/o competencias emocionales.'
            ],
            explanation: [
              'Se abordan de forma individualizada trastornos derivados del desequilibrio emocional y mental que generan problemas como ansiedad, depresión, estrés, ira y sus manifestaciones tanto en nuestro cuerpo como en el entorno.',
              'Los trastornos más habituales son:',
            ],
            icon: (
              <PersonIcon />
            ),
            color: colors.lightBlue,
            lessons: [
              'Ansiedad y estrés',
              'Depresión',
              'Fobias',
              'Obsesiones',
              'Problemas en las relaciones sociales',
              'Disfunciones sexuales',
              'Alcoholismo, tabaquismo y conductas adictivas',
              'Enfermedades psicosomática'
            ],
          },
          {
            title: 'Terapia grupal',
            subtitle: [
              'Los grupos de apoyo emocional son estructuras de trabajo para personas interesadas en crecer hacia el bienestar emocional.',
              'Se realizan en grupos de 6 a 12 personas que se reúnen periódicamente, acompañados de terapeutas expertos en técnicas de apoyo emocional.',
              'De este modo se consolidan y se practican las herramientas aprendidas en los diferentes cursos impartidos en este centro.'
              , "La mayoría de las personas que han participado en una terapia de grupo corroboran que ha sido una experiencia positiva y enriquecedor."
            ],
            explanation: [
              , "Al principio, algunas personas son reacias a involucrarse en una terapia de grupo. Por su mente rondan muchas preguntas: ¿Tendré espacio suficiente para hablar de mis problemas? ¿Los otros me escucharán? ¿Qué sucede si los miembros del grupo no me resultan simpáticos? ¿Me sentiré incómodo hablando de mis problemas."
              , "Es perfectamente comprensible que tengas estas dudas, ya que integrarse en un grupo conlleva involucrarse emocionalmente con otras personas. Sin embargo, las experiencias de los demás pueden resultar muy valiosas, al igual que tus vivencias pueden ayudar a los demás y conocer que hay otras personas que están atravesando circunstancias similares a las tuyas, contribuye a que te sientas identificado y comprendido en el grupo."
              , "Con la terapia de grupo, poco a poco irás ganando confianza y podrás hablar abiertamente de tus problemas en un ambiente de apoyo y comprensión que te aliviará. Se trata de un espacio privado y confidencial."
            ],
            icon: (
              <GroupIcon />
            ),
            color: colors.green,
            lessons: [
            ],
          },
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Grid
              container
              spacing={isMd ? 4 : 2}
              flexDirection={'row'}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-left' : 'fade-up'}
              >
                <Box
                  component={Card}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  width={'100%'}
                  height={'100%'}
                  bgcolor={alpha(item.color[themeMode === 'light' ? 50 : 900], .3)}
                >
                  <CardContent>
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
                        {item.subtitle.map((oneEx, z) => (
                          <Grid item>
                            <Typography key={z} color="text.secondary">
                              {oneEx}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </CardContent>
                </Box>
              </Grid>
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

                    <Grid container spacing={2}>
                      {item.explanation.map((oneSb, z) => (
                        <Grid item>
                          <Typography key={z} color="text.secondary">
                            {oneSb}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container>
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
                              <ArrowRightIcon color={"secondary"} />
                            </Box>
                            <Typography key={j} color="text.secondary">
                              {lesson}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
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
