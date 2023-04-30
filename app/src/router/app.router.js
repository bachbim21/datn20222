import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { decode } from "../utils/app.function";
import Home from "../Pages/HomePage";
import Login from "../Pages/Auth/login";
import Signup from "../Pages/Auth/signup";
import Project from "../Pages/Project";
import DefaultLayout from "../Components/Layout/DefaultLayout";
import AnonymousProject from "../Pages/Project/anonymous";
import Profile from "../Pages/Profile";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    loader: () => {
      let decoded = decode(null);
      return decoded;
    },
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => {
          document.title = "Trang chủ";
          return null;
        },
      },
      {
        path: "design",
        element: <AnonymousProject />,
        loader: () => {
          document.title = "Thiết kế";
          return null;
        },
      },
      {
        path: "",
        element: <Private />,
        loader: () => {
          const token = localStorage.getItem("token");
          if (!token) return redirect("/login");
          return null;
        },
        children: [
          {
            path: "project/:id",
            element: <Project />,
            loader: () => {
              document.title = "Dự án";
              return null;
            },
          },
          {
            path: "profile/:userId",
            element: <Profile />,
            loader: () => {
              document.title = "Hồ sơ";
              return null;
            },
          },
        ],
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
