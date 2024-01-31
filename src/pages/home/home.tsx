import { Button, Center } from '@mantine/core';

import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const Home = () => {
  return (
    <PageLayout>
      <Center h="100%" w="100%">
        <Button>Get all categories</Button>
      </Center>
    </PageLayout>
  );
};
