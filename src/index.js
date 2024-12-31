import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import GlobalState from "./context/GlobalState";
import ECommerce from "./ECommerce";
import { Provider } from "react-redux";
import Store from "./redux/store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* This is for food recipe app */}
      {/* <GlobalState>
        <App />
      </GlobalState> */}

      {/* This is for E-commerce app */}
      <Provider store={Store}>
        <ECommerce />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
