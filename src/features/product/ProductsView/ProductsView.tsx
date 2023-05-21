import { useEffect } from 'react';

import { GridCardContainer, ProductCard } from '@components';
import { useProductsStore } from '@core/stores';
import { Loader } from '@shared/UI';

import { LoadMoreButton } from './LoadMoreButton';
import { ProductCategories } from './ProductCategories';

import type { ProductsStore } from '@core/stores';

import styles from './ProductsView.module.scss';

const productsSelector = (state: ProductsStore) =>
  [state.products, state.isLoadingProducts, state.getProducts] as const;

export const ProductsView = () => {
  const [products, isLoadingProducts, getProducts] = useProductsStore(productsSelector);

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoadingProducts && !products.length) {
    return <Loader />;
  }
  return (
    <Loader spinning={isLoadingProducts}>
      <div className={styles.productsView}>
        <ProductCategories />
        <GridCardContainer className={styles.cardContainer}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridCardContainer>

        <LoadMoreButton />
      </div>
    </Loader>
  );
};
