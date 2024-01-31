import { ActionIcon, AppShell, Container, Flex } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import { ReactNode } from 'react';

import { ThemeButton } from '@/features/theme-button';

import { logout } from '@/shared/session';

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <AppShell header={{ height: 50 }}>
      <AppShell.Header withBorder={false}>
        <Container display="flex" size="xl" h="100%">
          <Flex columnGap="xs" align="center">
            <ThemeButton />
            <ActionIcon>
              <IconLogout onClick={() => logout()} stroke={1.5} />
            </ActionIcon>
          </Flex>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container size="xl">{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};
