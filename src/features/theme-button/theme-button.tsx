import { ActionIcon, ThemeIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export const ThemeButton = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ThemeIcon onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
      <ActionIcon lightHidden>
        <IconMoon stroke={1.5} />
      </ActionIcon>
      <ActionIcon darkHidden>
        <IconSun stroke={1.5} />
      </ActionIcon>
    </ThemeIcon>
  );
};
