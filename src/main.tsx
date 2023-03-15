import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import store from "./store";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
