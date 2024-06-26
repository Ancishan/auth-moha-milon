import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Registration from './Components/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path:'/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>   //private route krr reason hcce log in na kora obostahi jate na dekhe
      },
      {

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
