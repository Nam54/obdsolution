import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useState } from "react";
import Table from "./components/Table";
import './App.css'

function App() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="cttable">
        <Table />
      </div>
    </div>
  );
}

export default App;
