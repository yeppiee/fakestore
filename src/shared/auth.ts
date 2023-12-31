import { createEvent, createStore } from 'effector';
import { condition } from 'patronum';

import { routes } from '@/shared/config/routes';

export const loginClicked = createEvent();
export const logoutClicked = createEvent();

export const $isAuthorized = createStore(false);

$isAuthorized.on(loginClicked, () => true);
$isAuthorized.on(logoutClicked, () => false);

condition({
  source: $isAuthorized,
  if: true,
  then: routes.home.open,
  else: routes.auth.login.open,
});

$isAuthorized.watch((state) => console.log('state', state));
