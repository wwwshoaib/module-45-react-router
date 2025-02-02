import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import UserDetails from "./components/UserDetails/UserDetails";
import PostDetails from "./components/PostDetails/PostDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch ('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }, 

      {
        path: '/user/:userId',
        loader: (({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)),
        element: <UserDetails></UserDetails>,
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      }, 
      {
        path: '/post/:postId',
        loader: (({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.postId}`) ),
        element: <PostDetails></PostDetails>,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);