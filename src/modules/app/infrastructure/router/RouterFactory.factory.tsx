import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { RouteLoader } from '@/ui';

import { Layout } from '../../pages';

const Home = lazy(
  () => import(/* webpackChunkName: "Home" */ '../../../podcastRss/pages/PodcastRss'),
);
const PodcastDetail = lazy(
  () => import(/* webpackChunkName: "Example2" */ '../../pages/Example2.page'),
);

const RouterFactory = {
  makeRouter: (): RouteObject[] => [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <RouteLoader Component={Home} /> },
        {
          path: '/podcast/:id',
          element: <RouteLoader Component={PodcastDetail} />,
        },
        { path: '*', element: <Navigate replace to='/' /> },
      ],
    },
  ],
};
export { RouterFactory };
