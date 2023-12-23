import { createRoutesView } from 'atomic-router-react';

import { HomeRoute } from '@/pages/home';
import { SignInRoute } from '@/pages/signin';
import { SignUpRoute } from '@/pages/signup';
import { NotFound } from '@/pages/not-found/not-found';

export const Routes = createRoutesView({
  routes: [HomeRoute, SignInRoute, SignUpRoute],
  otherwise: NotFound,
});
