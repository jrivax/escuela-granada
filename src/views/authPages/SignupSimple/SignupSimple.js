import React from 'react';
import { Box } from '@mui/system';
import Container from 'common/Container';
import { Form } from './components';

const SignupSimple = () => {
  return (
    <Box
      position={'relative'}
      minHeight={'calc(100vh - 247px)'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
    >
      <Container maxWidth={600}>
        <Form />
      </Container>
    </Box>
  );
};

export default SignupSimple;
