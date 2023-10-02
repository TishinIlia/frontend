import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@app/components/App/App';
import DeviceList from '@components/DeviceList/DeviceList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DeviceList />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
