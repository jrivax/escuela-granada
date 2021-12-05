/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RocketIllustration from 'svg/illustrations/Rocket';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={8}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box 
          minWidth={1150}
          marginBottom={2}
          marginRight={2}>
            <Typography
              variant="h1"
              //color="textThird"
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.textHero
              }}
            >
              Enseñamos{' '}
              <Typography
                //color={'primary'}
                sx={{
                  color: theme.palette.secondaryText.primary
                }}
                component={'span'}
                variant={'inherit'}
              >
                <Typed
                  strings={['relajación.', 'habilidades.', 'salud.']}
                  typeSpeed={60}
                  loop={true}
                />
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h5"
              component="p"
              //color="textSecondary"
              sx={{ 
                color: alpha(theme.palette.secondaryText.primary, .9),
                fontWeight: 400 
              }}
            >
              Nuestra base de trabajo es que la salud se puede aprender y cultivar. 
              Sólo hace falta intención de cambio, buenas técnicas y entrenamiento. Se puede aprender a positivar, 
              a disfrutar, a querese uno mismo, a relacionarse, a sanar y siempre mejorar.
            </Typography>
          </Box>
          {/* <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={
                'https://material-ui.com/store/items/webbee-landing-page/'
              }
              target={'_blank'}
            >
              Purchase now
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={'/docs-introduction'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                View documentation
              </Button>
            </Box>
          </Box> */}
        </Box>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={'100%'} width={'100%'} maxHeight={600}>
            <RocketIllustration width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Hero;
