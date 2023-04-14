import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import "./App.css";
import Vehicle from "../../components/Vehicle";
import IdContext from "../../contexts/IdContext";
function App() {
  const [idV, setIdV] = useState(``);
  const value = { idV, setIdV };
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  console.log(idV);
  return (
    <IdContext.Provider value={value}>
      <div>
        <div>
          <Navbar username={adminUser.username} />
        </div>
        <Vehicle infoBtnDisplay={true} btnDisplay={false} />
        <div className="cttable">
          <Table rowsPerPage={20} idV={idV} />
        </div>
      </div>
    </IdContext.Provider>
  );
}

export default App;
