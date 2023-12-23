import { Center, Flex, Text } from '@mantine/core';

import { TestNavigation } from '@/features/test-navigation';

export const SignUp = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>SignUp Page</Text>
        <TestNavigation />
      </Flex>
    </Center>
  );
};
