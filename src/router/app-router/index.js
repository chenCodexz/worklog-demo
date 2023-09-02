// import { Navigate } from 'react-router-dom';
// import Layout from '../../layout';
import Home from '../../page/home';
// import ErrPage from '../..//pages/error';
import Day from '../../form/day';
import Week from '../../form/week'; //'./form/week';

export const routes = [
  {
    path: '/',
    auth: false,
    element: <Home />,
  },
  {
    path: '/day',
    element: <Day />,
    // loader: dayLoader,
  },
  {
    path: '/week',
    element: <Week />,
    // loader: dayLoader,
  },
  // {
  //   path: '/login',
  //   auth: false,
  //   element: <Login />,
  // },
  // {
  //   path: '/errPage',
  //   auth: false,
  //   element: <ErrPage />,
  // },
  // {
  //   path: '/*',
  //   auth: false,
  //   element: <Navigate to="/errPage" replace={true}></Navigate>,
  // },
];
