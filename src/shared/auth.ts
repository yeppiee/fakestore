import { createEvent, createStore, sample } from 'effector';

import { routes } from '@/shared/config/routes';

export const loginClicked = createEvent();
export const logoutClicked = createEvent();

export const $isAuthorized = createStore(false);

$isAuthorized.on(loginClicked, () => true);
$isAuthorized.on(logoutClicked, () => false);

sample({
  clock: $isAuthorized,
  filter: (isAuthorized) => isAuthorized,
  target: routes.home.open,
});

sample({
  clock: $isAuthorized,
  filter: (isAuthorized) => !isAuthorized,
  target: routes.auth.login.open,
});

$isAuthorized.watch((state) => console.log('state', state));
