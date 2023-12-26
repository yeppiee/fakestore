import { Container } from '@mantine/core';

import { ThemeButton } from '@/features/theme-button';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <Container className={styles.container} size="xl" h={50}>
        <ThemeButton />
      </Container>
    </header>
  );
};
