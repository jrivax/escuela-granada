import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import julioHerrero from 'img/faces/julioHerrero.jpg';
import maria from 'img/faces/maria.jpeg';
import clara from 'img/faces/clara_dos.png';
import guadalupe from 'img/faces/guadalupe.jpeg';
import girl from 'img/faces/girl.png';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Professionals = (props) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
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

  const handleClick = () => {
    props.history.push('/');
  }

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
          Nuestro equipo de profesionales
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos="fade-up"
        >
          Creemos en el trabajo en equipo
        </Typography>
      </Box>
      <Box>
        <Slider {...sliderOpts} >
          {/* <Grid container spacing={2}> */}
          {[
            {
              name: 'Dr. Julio Herrero Lozano',
              title: 'Médico Psiquiatra. Psicoterapeuta.',
              avatar: `${julioHerrero}`,
              description: ['Cursó sus estudios de Medicina hasta licenciarse en el año 1972 en la Universidad Complutense de Madrid, desarrollando su actividad como médico de familia e internista en el Hospital Clínico San Carlos.'
                , 'En 1975 se especializó en Psiquiatría, ejerciendo como médico psiquiatra y psicoterapeuta desde entonces.'
                , 'Médico del Ayuntamiento de Madrid desde 1974, ocupó la plaza de Psiquiatría de la Beneficencia Municipal desde 1980 hasta la desaparición de la misma en 1993 y, desde entonces, desarrolla su actividad en el ámbito individual y de grupo, impartiendo cursos de Entrenamiento en Relajación Creativa y Habilidades Emocionales así como grupos de Apoyo Emocional para los distintos Programas Municipales (Funcionarios, Menopausia, Obesidad, Pacientes Seropositivos, etc.)'
                , 'Miembro Fundador del centro de Psicoterapia Médica Escuela Granda en Madrid donde ejerce como Psiquiatra y Psicoterapeuta.'
                , 'Ganador del lV premio Madrid Previene por el proyecto: “Evaluación de los resultados obtenidos tras la aplicación a población de alto riesgo emocional del proyecto G.E.R.C.H.E. para la prevención en Salud Laboral de la Policía Municipal”']
            },
            {
              name: 'Dña. Clara Giménez del Olmo',
              title: 'Psicólogo Psicoterapeuta',
              avatar: `${clara}`,
            },
            {
              name: 'Dra. María Herrero Martín',
              title: 'Médico Psicólogo. Psicoterapeuta',
              avatar: `${maria}`,
            },
            {
              name: 'Guadalupe Mena Rodriguez',
              title: 'Psicólogo Psicoterapeuta',
              avatar: `${guadalupe}`,
            }
            // {
            //   name: 'Guadalupe Mena Rodriguez',
            //   title: 'Psicólogo Psicoterapeuta',
            //   avatar: `${girl}`,
            // },
            // {
            //   name: 'Guadalupe Mena Rodriguez',
            //   title: 'Psicólogo Psicoterapeuta',
            //   avatar: `${girl}`,
            // },
            // {
            //   name: 'Guadalupe Mena Rodriguez',
            //   title: 'Psicólogo Psicoterapeuta',
            //   avatar: `${girl}`,
            // },
          ].map((item, i) => (
            // <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box component={Card} padding={2} boxShadow={0} bgcolor={'transparent'}>
              <Box
                component={CardMedia}
                borderRadius={2}
                width={'100%'}
                height={'100%'}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={'transparent'}
                marginTop={-5}
              >
                <Box component={Card} borderRadius={2} >
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} />
                    <Grid container alignItems="center" marginTop={2}>
                      <Grid item xs>
                        <Box >
                          <IconButton aria-label="facebook" size={'small'}>
                            <FacebookIcon />
                          </IconButton>
                          <IconButton aria-label="twitter" size={'small'}>
                            <TwitterIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Box component={CardActions} justifyContent={'flex-end'}>
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
                          <Link to={{
                            pathname: '/professional-view',
                            state: {
                              professional: item
                            }
                          }}>Más información</Link>
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
