import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

import styles from './theme-button.module.css';

export const ThemeButton = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
      <IconMoon className={styles.dark} stroke={1.5} />
      <IconSun className={styles.light} stroke={1.5} />
    </ActionIcon>
  );
};
