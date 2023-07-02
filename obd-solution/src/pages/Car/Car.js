import React, { useState, useEffect } from "react";
import "./Car.css";
import CarComponent from "../../components/CarManager";
import Vehicle from "../../components/Vehicle";
import Navbar from "../../components/Navbar";

const adminUser = {
  username: "admin",
  password: "admin",
};

export default function Car() {
  const defaultVehicle = {
    Name: "",
    SetUpTime: "",
    Phone: "",
    
  };
  const [vehicleOSelected, setVehicleOSelected] = useState(defaultVehicle);


 
  

  console.log(vehicleOSelected);
  return (
    <div className="page_container">
      <Navbar username={adminUser.username} />
      <Vehicle
        infoBtnDisplay={false}
        btnDisplay={true}
        dateDisplay={false}
        passName={null}
        passVehicle={setVehicleOSelected}
      />

      <div className="cttable">
        <CarComponent Vehicle={vehicleOSelected} />
      </div>
    </div>
  );
}
