import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, PhotoDetail, Page404 } from '@/pages';

enum ROUTES_PATH {
  root = '/',
  error404 = '*',
  photoDetail = '/photo/detail'
}

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.photoDetail,
    element: (
        <PhotoDetail />
    ),
  },
  {
    path: ROUTES_PATH.root,
    element: (
      <Home />
    ),
  },
  {
    path: ROUTES_PATH.error404,
    element: <Page404 />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
