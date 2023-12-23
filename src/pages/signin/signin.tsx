import { Button, Center, Flex, Text } from '@mantine/core';

export const SignIn = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>SignIn Page</Text>
        <Button variant="filled" color="green" radius="md">
          Button
        </Button>
      </Flex>
    </Center>
  );
};
