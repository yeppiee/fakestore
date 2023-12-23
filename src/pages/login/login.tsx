import { Center, Flex, Text } from '@mantine/core';

import { TestNavigation } from '@/features/test-navigation';

export const Login = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>Login Page</Text>
        <TestNavigation />
      </Flex>
    </Center>
  );
};
