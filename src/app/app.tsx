import { createTheme, CSSVariablesResolver, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { RouterProvider } from 'atomic-router-react';

import { Routes } from '@/pages';

import { router } from '@/shared/config/router';

const theme = createTheme({
  colors: {
    customColorDark: [
      '#fff4e2',
      '#ffe9cc',
      '#ffd09c',
      '#fdb766',
      '#fca13a',
      '#fb931d',
      '#fc8c0c',
      '#e17900',
      '#c86a00',
      '#ae5a00',
      'rgba(252, 140, 12, .15)',
      'rgba(252, 140, 12, .2)',
    ],
  },
});

const resolver: CSSVariablesResolver = (theme) => {
  return {
    variables: {},
    light: {},
    dark: {
      '--mantine-primary-color-0': theme.colors.customColorDark[0],
      '--mantine-primary-color-1': theme.colors.customColorDark[1],
      '--mantine-primary-color-2': theme.colors.customColorDark[2],
      '--mantine-primary-color-3': theme.colors.customColorDark[3],
      '--mantine-primary-color-4': theme.colors.customColorDark[4],
      '--mantine-primary-color-5': theme.colors.customColorDark[5],
      '--mantine-primary-color-6': theme.colors.customColorDark[6],
      '--mantine-primary-color-7': theme.colors.customColorDark[7],
      '--mantine-primary-color-8': theme.colors.customColorDark[8],
      '--mantine-primary-color-9': theme.colors.customColorDark[9],
      '--mantine-primary-color-filled': theme.colors.customColorDark[6],
      '--mantine-primary-color-filled-hover': theme.colors.customColorDark[7],
      '--mantine-primary-color-light': theme.colors.customColorDark[10],
      '--mantine-primary-color-light-hover': theme.colors.customColorDark[11],
      '--mantine-primary-color-light-color': theme.colors.customColorDark[3],
    },
  };
};

export const App = () => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </MantineProvider>
  );
};
