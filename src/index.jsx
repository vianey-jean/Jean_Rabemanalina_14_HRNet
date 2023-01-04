import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";

/**
 * @file root folder of the application
 * @author Jean Marie Vianey RABEMANALINA
 * @see <a href="https://github.com/vianey-jean/Jean_Rabemanalina_14_HRNet/" target="_blank"> Masters </a>
 */


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
