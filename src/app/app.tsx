import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { Routes } from '@/pages';

export const App = () => {
  return (
    <MantineProvider>
      <Routes />
    </MantineProvider>
  );
};
