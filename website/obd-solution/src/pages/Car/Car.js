import React from "react";
import "./Car.css";
import CarComponent from "../../components/CarManager";
import Verhice from "../../components/Verhice";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

export default function Car() {
  return (
    <div className="page_container">
      <Navbar />

      <Verhice dateDisplay={false} btnDisplay={true} />
      <div className="cttable">
        <CarComponent />
      </div>
    </div>
  );
}
