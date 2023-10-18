import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddProduct from './pages/AddProduct.jsx';
import MyCart from './pages/MyCart.jsx';
import BrandProducts from './pages/BrandProducts.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Login from './pages/Login.jsx';

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: '/cart',
        element: <MyCart></MyCart>,
      },
      {
        path: '/brand/:name',
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      // {
      //   path: '/register',
      //   element: <Register></Register>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
