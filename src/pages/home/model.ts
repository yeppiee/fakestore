import { createEffect, createEvent, createStore, sample } from 'effector';
import { spread } from 'patronum';

import { routes } from '@/shared/config/routes';
import { chainAuthorized } from '@/shared/session';

export const homeRoute = routes.home;
export const authorizedHomeRoute = chainAuthorized(homeRoute, {
  otherwise: routes.auth.login.open,
});

authorizedHomeRoute.opened.watch(() => console.log('authorizedHomeRoute is open'));

export const $allCategories = createStore<string[]>([]);
export const $activeCategory = createStore<string | null>(null);

export const categoryChanged = createEvent<string | null>();

const fetchAllCategoriesFx = createEffect<void, string[], Error>(async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json();
});

sample({
  clock: authorizedHomeRoute.opened,
  target: fetchAllCategoriesFx,
});

sample({
  clock: fetchAllCategoriesFx.done,
  fn: ({ result }) => ({ allCategories: result, activeCategory: result[0] }),
  target: spread({
    allCategories: $allCategories,
    activeCategory: $activeCategory,
  }),
});

sample({
  clock: categoryChanged,
  fn: (category) => category,
  target: $activeCategory,
});
