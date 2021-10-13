import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import { useLocation } from 'react-router-dom'

import Container from 'common/Container';
// import { Professionals } from 'views/landingPages/Home/components/Professionals';
import backgroundImage from 'img/camino_salud_2.jpg';
import Card from '@mui/material/Card';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import julioHerrero from 'img/faces/julioHerrero.jpg';
import { CardActions } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Professional = ({ themeMode = 'light' }) => {
  const { professional } = useLocation().state;
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
              
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={6} md={3} data-aos={'fade-left'}>
                    <Box component={Card} boxShadow={0} bgcolor={'transparent'}>
                      <Box
                        component={CardMedia}
                        borderRadius={2}
                        width={'100%'}
                        height={'50%'}
                        minHeight={320}
                        image={professional.avatar}
                      />
                      <Box
                        component={CardContent}
                        bgcolor={'transparent'}
                        marginTop={-5}
                      >
                        <Box component={Card} borderRadius={2} >
                          <CardContent>
                            <ListItemText primary={professional.name} secondary={professional.name} />
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
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} data-aos={'fade-left'}>
                    <Box component={Card} width={900} boxShadow={0} bgcolor={'transparent'}>
                      <Box component={CardContent}>
                        <Box component={Card} borderRadius={2} >
                          <CardContent>
                            <Grid container spacing={1}>
                              {professional.description.map((lesson, j) => (
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
                          </CardContent>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
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
