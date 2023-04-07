import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import "./index.css";
import Users from "./pages/User/User";
import Login from "./pages/Login/Login";
import Cars from "./pages/Car/Car";
import { ThemeProvider } from "@material-tailwind/react";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cars" element={
          <ThemeProvider>
            <Cars/>
          </ThemeProvider>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  rootElement
);
