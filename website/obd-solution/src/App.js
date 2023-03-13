import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  return (
    <div>
      
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
