import { Image, List, ListItem, Tabs } from '@mantine/core';
import { useUnit } from 'effector-react';

import { PageLayout } from '@/shared/ui/layouts/page-layout';

import styles from './home.module.css';
import { $activeCategory, $allCategories, $categoryProducts, categoryChanged } from './model';

export const Home = () => {
  const [allCategories, activeCategory, specificCategoryList] = useUnit([
    $allCategories,
    $activeCategory,
    $categoryProducts,
  ]);

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
      <List>
        {specificCategoryList.map((product) => (
          <ListItem key={product.id}>
            <Image src={product.image} h={100} w={100} />
          </ListItem>
        ))}
      </List>
    </PageLayout>
  );
};
