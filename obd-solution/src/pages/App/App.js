import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import "./App.css";
import Vehicle from "../../components/Vehicle";
import { Navigate, useNavigate } from "react-router-dom";


function App() {


  const defaultVerhice = {
    Name: "",
    SetUpTime: "",
    Phone: "",
    
  };
  const [vehicleOSelected, setVehicleOSelected] = useState(defaultVerhice);
  const navigate=useNavigate();

  useEffect(() => {
    var accessToken = "";
    const c = document.cookie.split(";");
    c.forEach((e) => {
      let t = e.split("=");
      if (t[0].trim() === "access_token") accessToken = t[1];
    });
   
    if(accessToken ===''){
      console.log("Access token: " + accessToken)
    }else{
      console.log('no redirect')
    }
  
    
  },[])
  return (
        
      <div>
        <div>
          <Navbar  />
        </div>
        <Vehicle infoBtnDisplay={true} btnDisplay={false} dateDisplay={true} passVehicle={setVehicleOSelected} />
        <div className="cttable">
          <Table rowsPerPage={10} Vehicle={vehicleOSelected} />
        </div>
      </div>

  );
}

export default App;
