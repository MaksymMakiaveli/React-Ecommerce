import { routes } from '@core/routes';

import type { RouteObject } from 'react-router-dom';

export const cartRouter: RouteObject = {
  path: routes.cart.root,
  element: <div>Cart</div>,
};
