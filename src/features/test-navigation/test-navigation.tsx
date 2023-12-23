import { Link } from 'atomic-router-react';

import { routes } from '@/shared/config/routes';

export const TestNavigation = () => {
  return (
    <>
      <Link to={routes.home}>go to home page</Link>
      <Link to={routes.auth.login}>go to login page</Link>
      <Link to={routes.auth.signup}>go to signUp page</Link>
    </>
  );
};
