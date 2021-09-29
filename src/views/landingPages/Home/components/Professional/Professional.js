import React from 'react';
import { useTheme, alpha } from '@material-ui/core/styles';
import Container from 'common/Container';
// import { Professionals } from 'views/landingPages/Home/components/Professionals';
import backgroundImage from 'img/camino_salud_2.jpg';
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

import julioHerrero from 'img/faces/julioHerrero.jpg';
import { CardActions } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Professional = ({ themeMode = 'light' }) => {
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
                variant={'h3'}
                gutterBottom
                align={'center'}
              >
                Los mejores expertos para tu salud
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
                      height={'50%'}
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
                          <Box >
                            <IconButton aria-label="facebook" size={'small'}>
                              <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="twitter" size={'small'}>
                              <TwitterIcon />
                            </IconButton>
                          </Box>
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

        </Container>
      </Box>
    </Box>
  );
};

export default Professional;
