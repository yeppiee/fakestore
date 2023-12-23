import { Center, Flex, Text } from '@mantine/core';

import { TestNavigation } from '@/features/test-navigation';

export const Home = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>Home Page</Text>
        <TestNavigation />
      </Flex>
    </Center>
  );
};
