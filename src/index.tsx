import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import router from '@app/router/router';
import Error from '@components/Error/Error';
import reportWebVitals from './reportWebVitals';

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/sw.js?')
//       .then(() => {
//         console.log('Service Worker Registered');
//       })
//       .catch((error) => {
//         console.error('cant register SW', error);
//       });
//   });
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ErrorBoundary FallbackComponent={Error}>
    <RouterProvider router={router} />
  </ErrorBoundary>,
);

reportWebVitals();
