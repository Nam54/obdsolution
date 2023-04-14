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
  

  return (
    <div className="page_container">
      <Navbar username={adminUser.username} />
      <Vehicle
        infoBtnDisplay={false}
        btnDisplay={true}

      />

      <div className="cttable">
        <CarComponent // After we got the car which was selected from vehicle component, pass it to this component
   
        />
      </div>
    </div>
 
  );
}
