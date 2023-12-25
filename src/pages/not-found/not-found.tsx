import { Center, Flex, Text } from '@mantine/core';
import { Link } from 'atomic-router-react';

import { routes } from '@/shared/config/routes';

export const NotFound = () => {
  return (
    <Center h="100%">
      <Flex direction="column" align="center" rowGap="xs">
        <Text>This Page is Not Found</Text>
        <Link to={routes.home}>Go to Home Page</Link>
      </Flex>
    </Center>
  );
};
