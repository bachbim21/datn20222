import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { decode } from "../utils/token";
import Home from "../Pages/HomePage";
import Login from "../Pages/Common/login";
import Signup from "../Pages/Common/signup";
import Project from "../Pages/Project";
import DefaultLayout from "../Components/Layout/DefaultLayout";
import AnonymousProject from "../Pages/Project/anonymous";
import Profile from "../Pages/Profile";
import Private from "./Private";
import Infor from "../Pages/Profile/info";
import EditProfile from "../Pages/Profile/edit-profile";
import ListProject from "../Pages/Profile/list-project";
import ShareProject from "../Pages/Profile/share";
import ForgetPass from "../Pages/Common/forget-pass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
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
          if (!decode()) return redirect("/login");
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
            children: [
              {
                path: '',
                index: true,
                element: <Infor/>,
              },
              {
                path: 'edit',
                element: <EditProfile/>,
              },
              {
                path: 'list-project',
                element: <ListProject/>,
              },
              {
                path: 'list-share',
                element: <ShareProject/>,
              },
            ]
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
  {
    path: "/forget-password",
    element: <ForgetPass />,
  },
]);

export default router;
