/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import { Button, Snackbar, TextField, Typography, Divider, Grid, Alert } from '@mui/material';

const Form = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    const templateEmail = {
      from_name: firstName || "Sin indicar",
      from_surname: secondName || "Sin indicar",
      form_message: message || "Sin indicar",
      form_email: email || "Sin indicar"
    }
    try {
      emailjs.send("service_9i6x61m", "template_3n8vlpm", templateEmail, 'user_4zicAFLBjHELQFusN96Dj')
        .then((response) => {
          setSeverity("success");
          setOpen(true);
        }, (error) => {
          setSeverity("error");
          setOpen(true);
        });
    } catch (error) {
      setSeverity("error");
      setOpen(true);
    }
  }
  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
        marginBottom={4}
      >
        <form noValidate autoComplete="off">
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                sx={{ height: 54 }}
                label="Nombre"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={secondName}
                sx={{ height: 54 }}
                label="Apellido"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                onChange={e => setSecondName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={message}
                label="Mensaje"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                onClick={handleSubmitContactForm}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component="a"
                    href="#0"
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href="#0"
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  and{' '}
                  <Box
                    component="a"
                    href="#0"
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={e => setOpen(false)}>
          <Alert onClose={e => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
            {
              severity === 'error' ? 'Error mandando notificación, por favor, intente ponerse en contacto de manera telefónica o intentelo de nuevo más tarde, sentimos las molestias'
                : 'Notificación enviada con éxito, nos pondemos en contacto con usted a la mayor brevedad posible, tu bienestar es nuestro bienestar'
            }
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
