import React from 'react';
import { useTheme, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { DemoPages, Features, Footer, Hero, Highlights } from './components';
import backgroundImage from 'img/camino_salud_2.jpg';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      {/* <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box> */}
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage:
            `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
          '&:after': {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '100%',
            content: '" "',
            zIndex: 1,
            backgroundColor: alpha(theme.palette.primary.main, .3),
            backgroundAttachment: 'fixed',
            opacity: 0.7,
          },
        }}
      >
        <Box
          position={{ xs: 'relative', md: 'absolute' }}
          top={{ xs: 0, md: '50%' }}
          width={'100%'}
          height={'auto'}
          sx={{
            transform: { md: 'translateY(-50%)' },
          }}
          zIndex={2}
        >
          <Container>
            <Hero />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
