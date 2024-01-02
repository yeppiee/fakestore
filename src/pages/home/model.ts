import { routes } from '@/shared/config/routes';
import { chainAuthorized } from '@/shared/session';

export const homeRoute = routes.home;
export const authorizedHomeRoute = chainAuthorized(homeRoute, {
  otherwise: routes.auth.login.open,
});

authorizedHomeRoute.opened.watch(() => console.log('authorizedHomeRoute is open'));
