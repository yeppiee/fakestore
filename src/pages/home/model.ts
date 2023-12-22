import { routes } from '@/shared/config/router';

export const homeRoute = routes.home;

homeRoute.opened.watch(() => console.log('homeRoute is open'));
