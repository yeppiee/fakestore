import { createHistoryRouter, createRouterControls } from 'atomic-router';
import { sample } from 'effector';
import { createBrowserHistory } from 'history';

import { appStarted } from '@/shared/config/init';
import { routes } from '@/shared/config/routes';

const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: '/',
      route: routes.home,
    },
    {
      path: '/login',
      route: routes.auth.login,
    },
    {
      path: '/signup',
      route: routes.auth.signup,
    },
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
