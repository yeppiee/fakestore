import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { RouterProvider } from 'atomic-router-react';

import { Routes } from '@/pages';

import { router } from '@/shared/config/router';

export const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </MantineProvider>
  );
};
