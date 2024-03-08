import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/media.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContext from './Contextdata/AdminContext';
// admin routes
import { AdminLogin } from './pages/admin/AdminLogin';
import { Dashboard } from './pages/admin/Dashboard';
import { AddCategory } from './pages/admin/AddCategory';
import { ViewCategory } from './pages/admin/ViewCategory';
import { AddSubcategory } from './pages/admin/AddSubcategory';
import { ViewSubCategory } from './pages/admin/ViewSubCategory';
import { AddProduct } from './pages/admin/AddProduct';
import { ViewProduct } from './pages/admin/ViewProduct';
import { AddColor } from './pages/admin/AddColor';
import { ViewColor } from './pages/admin/ViewColor';
import { Users } from './pages/admin/Users';
import { Orders } from './pages/admin/Orders';
import { AdminProfile } from './pages/admin/AdminProfile';
import { AddSlider } from './pages/admin/AddSlider';
import { ViewSlider } from './pages/admin/ViewSlider';
// web routes
import { Home } from './pages/web/Home';
import { Login } from './pages/web/Login';
import { Register } from './pages/web/Register';
import { Profile } from './pages/web/Profile';
import { ChangePassword } from './pages/web/ChangePassword';
import MyOrders from './pages/web/MyOrders';

const root = ReactDOM.createRoot(document.getElementById('root'));
// creating browser routes
let routes = createBrowserRouter([
  // Admin routes
  {
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/admin/profile",
    element: <AdminProfile />,
  },

  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/admin/slider/add-slider",
    element: <AddSlider />,
  },

  {
    path: "/admin/slider/view-slider",
    element: <ViewSlider />,
  },

  {
    path: "/admin/category/add-category",
    element: <AddCategory />,
  },

  {
    path: "/admin/category/view-category",
    element: <ViewCategory />,
  },

  {
    path: "/admin/category/add-subcategory",
    element: <AddSubcategory />,
  },

  {
    path: "/admin/category/view-subcategory",
    element: <ViewSubCategory />,
  },

  {
    path: "/admin/product/add-product",
    element: <AddProduct />,
  },

  {
    path: "/admin/product/view-product",
    element: <ViewProduct />,
  },

  {
    path: "/admin/color/add-color",
    element: <AddColor />,
  },

  {
    path: "/admin/color/view-color",
    element: <ViewColor />,
  },

  {
    path: "/admin/users",
    element: <Users />,
  },

  {
    path: "/admin/orders",
    element: <Orders />,
  },

  // web routes
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/change-password",
    element: <ChangePassword />,
  },

  {
    path: "/change-password",
    element: <ChangePassword />,
  },

  {
    path: "/my-orders",
    element: <MyOrders />,
  },
])
root.render(
  <MainContext>
    <RouterProvider router={routes} />
  </MainContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
