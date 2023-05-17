import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
