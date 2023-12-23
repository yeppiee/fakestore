import { createRoutesView } from 'atomic-router-react';

import { HomeRoute } from '@/pages/home';
import { LoginRoute } from '@/pages/login';
import { NotFound } from '@/pages/not-found/not-found';
import { SignUpRoute } from '@/pages/signup';

export const Routes = createRoutesView({
  routes: [HomeRoute, LoginRoute, SignUpRoute],
  otherwise: NotFound,
});
