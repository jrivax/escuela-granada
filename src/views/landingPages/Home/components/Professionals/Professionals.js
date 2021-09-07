import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import julioHerrero from 'img/faces/julioHerrero.jpg';
import girl from 'img/faces/girl.png';

const Professionals = () => {
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
      <Grid container spacing={2}>
        {[
          {
            name: 'Dr. Julio Herrero Lozano',
            title: 'Médico Psiquiatra. Psicoterapeuta.',
            avatar: `${julioHerrero}`,
          },
          {
            name: 'Dña. Clara Giménez del Olmo',
            title: 'Psicólogo Psicoterapeuta',
            avatar: `${girl}`,
          },
          {
            name: 'Dra. María Herrero Martín',
            title: 'Médico Psicólogo. Psicoterapeuta',
            avatar: `${girl}`,
          },
          {
            name: 'Guadalupe Mena Rodriguez',
            title: 'Psicólogo Psicoterapeuta',
            avatar: `${girl}`,
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} data-aos={'fade-up'}>
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
                <Box component={Card} borderRadius={2}>
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} />
                    <Box marginTop={2}>
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
        ))}
      </Grid>
    </Box>
  );
};

export default Professionals;
