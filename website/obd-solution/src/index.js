import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import "./index.css";
import User from "./pages/User/User";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  rootElement
);
