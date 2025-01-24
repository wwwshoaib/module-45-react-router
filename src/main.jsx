import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [ 
      {
        path: '/about',
        element: <About></About>,
      },
      
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        element: <Users></Users>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);