import { createRouteView } from 'atomic-router-react';

import { Login } from '@/pages/login/login';
import { loginRoute, unauthorizedLoginRoute } from '@/pages/login/model';

import { PageLoader } from '@/shared/ui';

export const LoginRoute = {
  view: createRouteView({
    route: unauthorizedLoginRoute,
    view: Login,
    otherwise: PageLoader,
  }),
  route: loginRoute,
};
