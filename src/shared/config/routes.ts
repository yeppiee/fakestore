import { createRoute } from 'atomic-router';

export const routes = {
  home: createRoute(),
  auth: {
    signIn: createRoute(),
    signUp: createRoute(),
  },
};
