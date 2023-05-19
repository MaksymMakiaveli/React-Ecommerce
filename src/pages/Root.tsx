import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from '@core/routes';
import { MainLayout } from '@layouts';

const router = createBrowserRouter([
  {
    path: routes.home.root,
    element: <MainLayout />,

    children: [
      {
        path: '/favorite',
        element: <h1>Favorite</h1>,
      },
      {
        path: routes.cart.root,
        element: <h1>Cart</h1>,
      },
    ],
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
