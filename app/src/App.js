import React from "react";
import { useDispatch } from "react-redux";
import { ReSize } from "./Components/Layout/layout.slice";
import { RouterProvider } from "react-router";
import router from "./router/app.router";
import { useEffect } from "react";
import { setDispatch } from "./utils/drag";
import 'zingchart/es6';
import './assets/output.css'
const App = () => {
  const dispatch = useDispatch();
  dispatch(
    ReSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  );
  useEffect(()=> {
    setDispatch(dispatch)
  },[])
  useEffect(() => {
    window.addEventListener("resize", function () {
      dispatch(
        ReSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    });
  }, [window.innerWidth, window.innerHeight]);

  window.addEventListener("error", (e) => {
    if (e.message === "ResizeObserver loop limit exceeded") {
      const resizeObserverErrDiv = document.getElementById(
        "webpack-dev-server-client-overlay-div"
      );
      const resizeObserverErr = document.getElementById(
        "webpack-dev-server-client-overlay"
      );
      if (resizeObserverErr) {
        resizeObserverErr.setAttribute("style", "display: none");
      }
      if (resizeObserverErrDiv) {
        resizeObserverErrDiv.setAttribute("style", "display: none");
      }
    }
  });

  return <RouterProvider router={router} />;
};

export default App;
