import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddProduct from './pages/AddProduct.jsx';
import MyCart from './pages/MyCart.jsx';
import BrandProducts from './pages/BrandProducts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brands.json'),
      },
      {
        path: '/add',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/cart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/brand/:name',
        element: <BrandProducts></BrandProducts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
