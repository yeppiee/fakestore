import { createEffect, createEvent, createStore, sample } from 'effector';
import { spread } from 'patronum';

import { Product } from '@/pages/home/types';

import { routes } from '@/shared/config/routes';
import { chainAuthorized } from '@/shared/session';

export const homeRoute = routes.home;
export const authorizedHomeRoute = chainAuthorized(homeRoute, {
  otherwise: routes.auth.login.open,
});

authorizedHomeRoute.opened.watch(() => console.log('authorizedHomeRoute is open'));

export const $allCategories = createStore<string[]>([]);
export const $activeCategory = createStore<string | null>(null);
export const $categoryProducts = createStore<Product[]>([]);

export const categoryChanged = createEvent<string | null>();

const fetchAllCategoriesFx = createEffect<void, string[], Error>(async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json();
});

const fetchCategoryProductsFx = createEffect<void, Product[], Error>(async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return res.json();
});

sample({
  clock: authorizedHomeRoute.opened,
  target: fetchAllCategoriesFx,
});

sample({
  clock: fetchAllCategoriesFx.doneData,
  fn: (result) => ({ allCategories: result, activeCategory: result[0] }),
  target: spread({
    allCategories: $allCategories,
    activeCategory: $activeCategory,
  }),
});

sample({
  clock: $activeCategory,
  target: fetchCategoryProductsFx,
});

sample({
  clock: fetchCategoryProductsFx.doneData,
  target: $categoryProducts,
});

sample({
  clock: categoryChanged,
  target: $activeCategory,
});
