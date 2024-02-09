import { Tabs } from '@mantine/core';
import { useUnit } from 'effector-react';

import { PageLayout } from '@/shared/ui/layouts/page-layout';

import styles from './home.module.css';
import { $activeCategory, $allCategories, categoryChanged } from './model';

export const Home = () => {
  const [allCategories, activeCategory] = useUnit([$allCategories, $activeCategory]);

  return (
    <PageLayout>
      <Tabs
        value={activeCategory}
        onChange={categoryChanged}
        mt={'xl'}
        classNames={{ tab: styles.tab }}
      >
        <Tabs.List>
          {allCategories.map((category, i) => (
            <Tabs.Tab key={i} value={category}>
              {category}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </PageLayout>
  );
};
