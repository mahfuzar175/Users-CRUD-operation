import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: 'home',
            element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
  ]);