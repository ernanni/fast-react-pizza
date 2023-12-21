import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppLayout, Error, Home } from './ui';
import { Menu, loader as menuLoader } from './features/menu';
import { Cart } from './features/cart';
import { CreateOrder, Order } from './features/order';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderID',
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
