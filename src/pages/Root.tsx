import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProtectedRoute } from '@components';
import { routes } from '@core/routes';
import { AuthLayout, MainLayout } from '@layouts';

const router = createBrowserRouter([
  {
    path: routes.home.root,
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),

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

  {
    path: routes.auth.root,
    element: <AuthLayout />,

    children: [
      {
        path: routes.auth.signin.root,
        element: <h1>Sign In</h1>,
      },
    ],
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
