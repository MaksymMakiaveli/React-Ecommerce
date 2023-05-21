import { GridCardContainer, ProductCard } from '@components';
import { useCartStore } from '@core/stores';
import { CountHandler } from '@shared/UI';

import { TotalInfo } from './TotalInfo';

import type { ProductEntity } from '@core/repositories';
import type { CartStore } from '@core/stores';

import styles from './CartView.module.scss';

const cartSelector = (state: CartStore) =>
  [state.products, state.addProductToCart, state.removeProductFromCart] as const;

export const CartView = () => {
  const [products, add, remove] = useCartStore(cartSelector);

  const handleClickPlus = (product: ProductEntity) => {
    return () => add(product);
  };

  const handleClickMinus = (product: ProductEntity) => {
    return () => remove(product);
  };

  const mapProducts = products.map(({ product, count, isAvailable }) => (
    <ProductCard
      key={product.id}
      product={product}
      customButton={
        <CountHandler
          count={count}
          onClickMinus={handleClickMinus(product)}
          onClickPlus={handleClickPlus(product)}
          propsPlusButton={{ disabled: !isAvailable }}
        />
      }
    />
  ));

  return (
    <div>
      <TotalInfo />
      <GridCardContainer className={styles.container}>{mapProducts}</GridCardContainer>
    </div>
  );
};
