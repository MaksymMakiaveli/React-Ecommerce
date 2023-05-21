import type { ProductCartEntity } from './product-cart.entity.ts';

export type CartEntity = {
  totalPrice: number;
  totalDiscounted: number;

  products: ProductCartEntity[];
};
