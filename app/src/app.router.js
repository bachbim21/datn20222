import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./Pages/HomePage";
import Login from "./Pages/Auth/login";
import Signup from "./Pages/Auth/signup";
import DefaultLayout from "./Components/Layout/DefaultLayout";

const token = localStorage.getItem("token");
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    loader: () => {
      if (!token) return redirect("/login");
      return null;
    },
    children: [
      {
        path: "",
        element: <Home />,
        // loader: teamLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
