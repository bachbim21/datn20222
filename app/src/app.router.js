import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./Pages/HomePage";
import Login from "./Pages/Auth/login";
import Signup from "./Pages/Auth/signup";
import Project from "./Pages/Project";
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
        loader: () => {
          if (!token) return redirect("/login");
          return null;
        },
      },
      {
        path: "project/:id",
        element: <Project />,
        loader: () => {
          if (!token) return redirect("/login");
          return null;
        },
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
