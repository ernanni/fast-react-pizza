import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppLayout, Error, Home } from "./ui";
import { Menu, loader as menuLoader } from "./features/menu";
import { Cart } from "./features/cart";
import {
  CreateOrder,
  action as createOrderAction,
  Order,
  loader as orderLoader,
  updateOrderAction,
} from "./features/order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
