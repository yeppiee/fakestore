import { Center, Flex, Text } from '@mantine/core';
import { Link } from 'atomic-router-react';

import { homeRoute } from '@/pages/home/model';
import { signInRoute } from '@/pages/signin/model';
import { signUpRoute } from '@/pages/signup/model';

export const SignIn = () => {
  return (
    <Center h="100%">
      <Flex direction="column">
        <Text>SignIn Page</Text>
        <Link to={homeRoute}>go to home page</Link>
        <Link to={signInRoute}>go to signIn page</Link>
        <Link to={signUpRoute}>go to signUp page</Link>
      </Flex>
    </Center>
  );
};
