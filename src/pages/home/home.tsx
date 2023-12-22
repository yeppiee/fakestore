import { Button, Center, Flex, Text } from '@mantine/core';

export const Home = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>home page</Text>
        <Button variant="filled" color="green" radius="md">
          Button
        </Button>
      </Flex>
    </Center>
  );
};
