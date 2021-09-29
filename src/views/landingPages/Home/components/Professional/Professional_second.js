import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import julioHerrero from 'img/faces/julioHerrero.jpg';
import girl from 'img/faces/girl.png';
import { CardActions } from '@material-ui/core';

const Professionals_two = () => {
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
        {/* <Slider {...sliderOpts} > */}
          <Grid container spacing={2}>
          {[
            {
              name: 'Dr. Julio Herrero Lozano',
              title: 'Médico Psiquiatra. Psicoterapeuta.',
              avatar: `${julioHerrero}`,
            }
          ].map((item, i) => (
            // <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
            <Box component={Card} boxShadow={0} bgcolor={'transparent'}>
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
                          <Button size="small">Conoce más</Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Box>
              </Box>
            </Box>
            // </Grid>
          ))}
          </Grid>
        {/* </Slider> */}
      </Box>
    </Box>
  );
};

export default Professionals_two;
