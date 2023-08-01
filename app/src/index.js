import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat",
        },
      }}>
      <App />
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>
);
