import React, { useState, useEffect } from "react";
import "./Car.css";
import CarComponent from "../../components/CarManager";
import Vehicle from "../../components/Vehicle";
import Navbar from "../../components/Navbar";
import VehicleContext from "../../contexts/VehicleContext";

const adminUser = {
  username: "admin",
  password: "admin",
};
const vehicleid = [
  { id: "59-GH19894" },
  { id: "59-GH02839" },
  { id: "59-GH10343" },
  { id: "59-GH18972" },
  { id: "59-GH86353" },
];
const vehicles = [
  {
    id: vehicleid[0].id,
    phone: "03927192812",
    datecf: "1/1/2023",
  },
  {
    id: vehicleid[1].id,
    phone: "03927192382",
    datecf: "1/1/2023",
  },
  {
    id: vehicleid[2].id,
    phone: "03927190802",
    datecf: "1/1/2023",
  },
  {
    id: vehicleid[3].id,
    phone: "01230192812",
    datecf: "1/1/2023",
  },
  {
    id: vehicleid[4].id,
    phone: "039123192812",
    datecf: "1/1/2023",
  },
];
export default function Car() {
  // Loading status
  const [loading, setLoading] = useState(true);

  // Handle errors
  const [error, setError] = useState(null);
  // List of vehicles
  const [vehiclesList, setvehicles] = useState(null);

  // First, fetch data from server
  
  useEffect( () =>{
    async function getVehicle(){
      const user=document.cookie;
      console.log(user);
      
      const res= await fetch(`http://192.168.1.7:3000/api/vehicle/Kha_pham`, {
        method: "GET",
        mode: "cors",
        withCredentials: true,
        credentials: "same-origin",
      })

      console.log(JSON.stringify(res));
    }
   
    //Check if the response is ok 
      // .then((response) => {
        
      //   if (!response.ok) {
      //     throw new Error(
      //       `This is an HTTP error: The status is ${response.status}`
      //     );
      //   }
        
      //   return response.vehicles;
      // })
      // Set vehicle list data is the response 
      // .then((data) => {
      //   setvehicles(data);
      //   setError(null);
      // })
      // Or if we got a problem =)))
      // .catch((err) => {
      //   setvehicles(null);
      //   setError(err.message);
      // })
      // .finally(() => {
      //   setLoading(false);
      // });
  }, []);

  // console.log(vehiclesList);

  // The vehicle which is currently selected will be passed to the Car management,
  // note that we still using fake data (vehicles...)
   
  const [vehicleSelected, setVehicleSelected] = useState(vehicles[0]);

  return (
    <div className="page_container">
      <Navbar username={adminUser.username} />
      <Vehicle
        infoBtnDisplay={false}
        btnDisplay={true}
        vehicless={vehicles} //The list of vehicle
        setVehicle={setVehicleSelected} // Callback function to send data from vehicle component back
      />

      
      <div className="cttable">
        <CarComponent // After we got the car which was selected from vehicle component, pass it to this component
        vehicleSelected={vehicleSelected} />
      </div>
    </div>
  );
}
