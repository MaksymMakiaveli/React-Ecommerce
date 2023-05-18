import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '/home',
        element: <h1>Home</h1>,
      },
    ],
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
