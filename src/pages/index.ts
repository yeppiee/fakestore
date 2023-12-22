import { createRoutesView } from 'atomic-router-react';

import { HomeRoute } from '@/pages/home';

export const Routes = createRoutesView({
  routes: [HomeRoute],
});
