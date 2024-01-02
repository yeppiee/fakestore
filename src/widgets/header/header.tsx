import { ActionIcon, Container, Flex } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

import { ThemeButton } from '@/features/theme-button';

import { logout } from '@/shared/session';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <Container className={styles.container} size="xl" h={50}>
        <Flex columnGap="xs">
          <ThemeButton />
          <ActionIcon>
            <IconLogout onClick={() => logout()} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Container>
    </header>
  );
};
