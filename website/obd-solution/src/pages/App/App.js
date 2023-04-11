import React from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import "./App.css";
import Verhice from "../../components/Verhice";

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
      <Verhice infoBtnDisplay={true} btnDisplay={false}/>
      <div className="cttable">
        <Table rowsPerPage={20} />
      </div>
    </div>
  );
}

export default App;
