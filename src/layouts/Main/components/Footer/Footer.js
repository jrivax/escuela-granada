import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
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
            width={110}
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
          <Box marginTop={1}>
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
          </Box>
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
        &copy; Webbee. 2021, Maccarian. All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        When you visit or interact with our sites, services or tools, we or our
        authorised service providers may use cookies for storing information to
        help provide you with a better, faster and safer experience and for
        marketing purposes.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
