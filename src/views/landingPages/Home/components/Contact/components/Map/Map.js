/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Map = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
            color: theme.palette.textWhite.primary
          }}
          gutterBottom
        //color={'textPrimary'}
        >
          Contáctanos
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.textWhite.primary
            }}
          >
            Ponte en contacto
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6"
            sx={{
              color: theme.palette.textWhite.primary
            }}
          >
            Nos encantaría hablar de cómo podemos ayudar.
          </Typography>
        </Box>
      </Box>
      <Box marginY={4}>
        <Box
          component={'iframe'}
          borderRadius={2}
          minHeight={400}
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2717168094296!2d-3.6724699842656654!3d40.42498187936414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228b03180a55d%3A0x8cac8cbd050b28db!2sEscuela%20Granada!5e0!3m2!1sen!2ses!4v1633966504853!5m2!1sen!2ses"
          sx={{
            filter:
              themeMode === 'dark' ? 'grayscale(0.5) opacity(0.7)' : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{
              fontWeight: 'medium',
              color: theme.palette.textWhite.primary
            }}
          >
            Teléfono:
          </Typography>
          <Typography
            sx={{
              color: theme.palette.textWhite.primary
            }}
            variant={'subtitle1'}>+39 34 111 222</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{
              fontWeight: 'medium',
              color: theme.palette.textWhite.primary
            }}
          >
            Email:
          </Typography>
          <Typography
            sx={{
              color: theme.palette.textWhite.primary
            }}
            variant={'subtitle1'}>info@escuelagranada.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{
              fontWeight: 'medium',
              color: theme.palette.textWhite.primary
            }}
          >
            Dirección:
          </Typography>
          <Typography
            sx={{
              color: theme.palette.textWhite.primary
            }}
            variant={'subtitle1'}>
            c/ Jardín de San Federico, 5 Bajo Izq. 28009 Madrid
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Map.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Map;
