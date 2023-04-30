import React from "react";
import { RouterProvider } from "react-router";
import router from "./router/app.router";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
