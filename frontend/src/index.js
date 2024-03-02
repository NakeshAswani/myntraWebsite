import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/web/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
//here i am working on react-router-dom
let routes = createBrowserRouter([
  // home page route
  {
    path:"/",
    element:<Home/>,
  },

])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
