import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Main from './Layouts/Main';
import { loaders } from './Loaders/Loaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Shop></Shop> },
        { path: '/shop',
        loader : () => {
          return fetch('products.json')
        },
        element: <Shop></Shop> },
        {
          path: '/orders',
          loader: loaders,
          element: <Order></Order>,
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/product',
          element: <Product></Product>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
