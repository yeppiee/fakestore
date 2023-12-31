import { loginClicked } from '@/shared/auth';
import { Button, Center, Container } from '@mantine/core';

export const Login = () => {
  return (
    <Container h="100%" w="100%">
      <Center h="100%" w="100%">
        <Button onClick={() => loginClicked()}>Login</Button>
      </Center>
    </Container>
  );
};
