import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import "./App.css";
import Verhice from "./components/Verhice";
import Members from "./components/Member"


function App() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  return (
    <div>
      <div>
        <Navbar username={adminUser.username} />
      </div>
      <Verhice/>
      <div className="cttable">
        <Table rowsPerPage={5}/>
      </div>

      <Members />
    </div>
  );
}

export default App;
