import { Center, Flex, Text } from '@mantine/core';
import { Link } from 'atomic-router-react';

import { routes } from '@/shared/config/routes';

export const SignUp = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>SignUp Page</Text>
        <Link to={routes.home}>go to home page</Link>
        <Link to={routes.auth.signIn}>go to signIn page</Link>
        <Link to={routes.auth.signUp}>go to signUp page</Link>
      </Flex>
    </Center>
  );
};
