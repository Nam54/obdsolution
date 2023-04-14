import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import "./App.css";
import Vehicle from "../../components/Vehicle";

function App() {

  const adminUser = {
    username: "admin",
    password: "admin",
  };

  const[vehicleSelected, setVehicleSelected] = useState(''); 

  console.log(vehicleSelected);


  return (
 
      <div>
        <div>
          <Navbar username={adminUser.username} />
        </div>
        <Vehicle infoBtnDisplay={true} btnDisplay={false} passName={(name)=>setVehicleSelected(name)} />
        <div className="cttable">
          <Table rowsPerPage={10} NameOfVehicle={vehicleSelected}/>
        </div>
      </div>

  );
}

export default App;
