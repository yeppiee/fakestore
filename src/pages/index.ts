import { createRoutesView } from 'atomic-router-react';

import { HomeRoute } from '@/pages/home';
import { SignInRoute } from '@/pages/signin';
import { SignUpRoute } from '@/pages/signup';

export const Routes = createRoutesView({
  routes: [HomeRoute, SignInRoute, SignUpRoute],
});
