import { createRouteView } from 'atomic-router-react';

import { Home } from '@/pages/home/home';
import { authorizedHomeRoute, homeRoute } from '@/pages/home/model';

import { PageLoader } from '@/shared/ui';

export const HomeRoute = {
  view: createRouteView({
    route: authorizedHomeRoute,
    view: Home,
    otherwise: PageLoader,
  }),
  route: homeRoute,
};
