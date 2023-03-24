import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useState } from "react";
import Table from "./components/Table";
import "./App.css";
import Verhice from "./components/Verhice";
import Member from "./components/Member";

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
      {/* <Verhice/> */}
      {/* <div className="cttable">
        <Table />
      </div> */}

      <div>
        <Member />
      </div>
    </div>
  );
}

export default App;
