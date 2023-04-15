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

  const defaultVerhice = {
    Name: "",
    SetUpTime: "",
    Phone: "",
    
  };
  const [vehicleOSelected, setVehicleOSelected] = useState(defaultVerhice);

  


  console.log(vehicleOSelected);


  return (
 
      <div>
        <div>
          <Navbar username={adminUser.username} />
        </div>
        <Vehicle infoBtnDisplay={true} btnDisplay={false} passVehicle={setVehicleOSelected} />
        <div className="cttable">
          <Table rowsPerPage={10} Vehicle={vehicleOSelected}/>
        </div>
      </div>

  );
}

export default App;
