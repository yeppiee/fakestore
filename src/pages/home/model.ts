import { routes } from '@/shared/config/routes';

export const homeRoute = routes.home;

homeRoute.opened.watch(() => console.log('homeRoute is open'));
