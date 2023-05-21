import { create } from '@core/stores/_utils';
import { calculateDiscount } from '@shared/utils';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { CartEntity, ProductCartEntity, ProductEntity } from '@core/repositories';

type Store = CartEntity;

type Action = {
  addProductToCart: (product: ProductEntity) => void;

  removeProductFromCart: (product: ProductEntity) => void;
};

export type CartStore = Store & Action;

const initialState: Store = {
  totalPrice: 0,
  totalDiscounted: 0,
  products: [],
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        ...initialState,

        addProductToCart: (product) => {
          const updatedProducts = get().products.map((p) => {
            if (p.product.id === product.id) {
              return {
                ...p,
                count: p.count + 1,
              };
            }
            return p;
          });

          set((state) => {
            state.products = updatedProducts;
            state.totalPrice = calculateTotalPrice(updatedProducts);
            state.totalDiscounted = calculateTotalDiscount(updatedProducts);
          });
        },

        removeProductFromCart: (product) => {
          const updatedProducts = get().products.map((p) => {
            if (p.product.id === product.id) {
              return {
                ...p,
                count: p.count - 1,
              };
            }
            return p;
          });

          set((state) => {
            state.products = updatedProducts;
            state.totalPrice = calculateTotalPrice(updatedProducts);
            state.totalDiscounted = calculateTotalDiscount(updatedProducts);
          });
        },
      })),
      {
        name: 'cart',
        version: 1,
      }
    ),
    { name: 'cart' }
  )
);

const calculateTotalPrice = (products: ProductCartEntity[]) => {
  return products.reduce((acc, product) => {
    return acc + product.product.price * product.count;
  }, 0);
};

const calculateTotalDiscount = (products: ProductCartEntity[]) => {
  return products.reduce((acc, product) => {
    const totalProductDiscount = calculateDiscount(
      product.product.price * product.count,
      product.product.discountPercentage * product.count
    );

    return acc + Number(totalProductDiscount);
  }, 0);
};
