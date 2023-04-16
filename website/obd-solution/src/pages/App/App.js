import React, { useState } from "react";
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
  const [dateSelected, setDateSelected] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  })

  return (
 
      <div>
        <div>
          <Navbar username={adminUser.username} />
        </div>
        <Vehicle infoBtnDisplay={true} btnDisplay={false} dateDisplay={true} passVehicle={setVehicleOSelected} />
        <div className="cttable">
          <Table rowsPerPage={10} Vehicle={vehicleOSelected} />
        </div>
      </div>

  );
}

export default App;
