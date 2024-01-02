import { Button, Center, Container } from '@mantine/core';

import { login } from '@/shared/session';

export const Login = () => {
  return (
    <Container h="100%" w="100%">
      <Center h="100%" w="100%">
        <Button onClick={() => login()}>Login</Button>
      </Center>
    </Container>
  );
};
