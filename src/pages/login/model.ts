import { routes } from '@/shared/config/routes';
import { chainUnauthorized } from '@/shared/session';

export const loginRoute = routes.auth.login;
export const unauthorizedLoginRoute = chainUnauthorized(loginRoute, {
  otherwise: routes.home.open,
});

unauthorizedLoginRoute.opened.watch(() => console.log('unauthorizedLoginRoute is open'));
