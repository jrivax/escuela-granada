import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import WebbeeLogo from 'svg/logos/Webbee';
import logo from 'img/logo_esg_granada_green.png';
import logoEscuelaGranada from 'img/logo_escuela_granada_verde.png';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Box
            display={'flex'}
            component="a"
            underline="none"
            href="/"
            title="webbee"
            height={55}
            width={55}
          >
            {/* <WebbeeLogo height={'100%'} width={'100%'} /> */}
            <img src={logo} alt={'logo'} height={'100%'} width={'100%'} />
          </Box>
          <Box
            display={'flex'}
            alignItems="baseline"
            component="a"
            underline="none"
            href="/"
            title="webbee"
            height={55}
            width={140}
          >
            <img src={logoEscuelaGranada} alt={'logoEscuelaGranada'} height={'100%'} width={'100%'} />
            {/* <WebbeeLogo height={'100%'} width={'100%'} /> */}
          </Box>
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Home
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/docs-introduction"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Documentation
            </Link>
          </Box>
          {/* <Box marginTop={1}>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/webbee-landing-page/"
              size="small"
            >
              Purchase now
            </Button>
          </Box> */}
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; Escuela Granada. 2012. Todos los derechos reservados.
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        Cuando usted visita o interactúa con nuestro sitio, servicio o herramienta, nosotros o nuestros
        proveedores de servicios autorizados pueden utilizar cookies para almacenar información para
        ayudar a proporcionarle una experiencia mejor, más rápida y más segura y para
        fines de marketing.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
