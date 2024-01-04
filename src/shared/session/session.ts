import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router';
import { createEvent, createStore, Effect, Event, EventCallable, sample } from 'effector';
import { persist } from 'effector-storage/local';

import { routes } from '@/shared/config/routes';

interface ChainParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherwise?: Event<void> | Effect<void, any, any>;
}

export const login = createEvent();
export const logout = createEvent();

export const $isAuthorized = createStore(false);
persist({ store: $isAuthorized, key: 'isAuthorized' });

$isAuthorized.on(login, () => true);
redirect({
  clock: login,
  route: routes.home,
});

$isAuthorized.on(logout, () => false);
redirect({
  clock: logout,
  route: routes.auth.login,
});

export const chainAuthorized = <Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {},
): RouteInstance<Params> => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const sessionReceivedUnauthorized = createEvent<RouteParamsAndQuery<Params>>();

  const authorized = sample({
    clock: sessionCheckStarted,
    source: $isAuthorized,
    filter: (isAuthorized) => isAuthorized === true,
  });

  const unauthorized = sample({
    clock: sessionCheckStarted,
    source: $isAuthorized,
    filter: (isAuthorized) => isAuthorized === false,
  });

  sample({
    clock: unauthorized,
    source: { params: route.$params, query: route.$query },
    filter: route.$isOpened,
    target: sessionReceivedUnauthorized,
  });

  if (otherwise) {
    sample({
      clock: sessionReceivedUnauthorized,
      target: otherwise as EventCallable<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: authorized,
    cancelOn: sessionReceivedUnauthorized,
  });
};

export const chainUnauthorized = <Params extends RouteParams>(
  route: RouteInstance<Params>,
  { otherwise }: ChainParams = {},
): RouteInstance<Params> => {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();
  const sessionReceivedAuthorized = createEvent<RouteParamsAndQuery<Params>>();

  const authorized = sample({
    clock: sessionCheckStarted,
    source: $isAuthorized,
    filter: (isAuthorized) => isAuthorized === true,
  });

  const unauthorized = sample({
    clock: sessionCheckStarted,
    source: $isAuthorized,
    filter: (isAuthorized) => isAuthorized === false,
  });

  sample({
    clock: authorized,
    source: { params: route.$params, query: route.$query },
    filter: route.$isOpened,
    target: sessionReceivedAuthorized,
  });

  if (otherwise) {
    sample({
      clock: sessionReceivedAuthorized,
      target: otherwise as EventCallable<void>,
    });
  }

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: unauthorized,
    cancelOn: sessionReceivedAuthorized,
  });
};

$isAuthorized.watch((state) => console.log('isAuthorized:', state));
