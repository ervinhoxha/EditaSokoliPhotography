import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Layout } from './Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
]);

export default router;
