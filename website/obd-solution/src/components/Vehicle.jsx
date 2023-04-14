import React from "react";
import { useState, useContext } from "react";
import "../../src/asset/styles/vehicle.css";
import IdContext from "../contexts/IdContext";

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

export default function Vehicle({  infoBtnDisplay, btnDisplay, vehiclesList, setVehicle }) {
  // Props:
  // vehiclesList is a list of vehicle we fetched from the Car
  // setVehicle is callback function to send what vehicle we selected


  // Check dropdown list
  const [isActive, setActive] = useState(false);

  // Check vehicle is selected in dropdown list
  const [selected, setSelected] = useState(vehicles[0]);

  // Check if infomation area is expanded or not
  const [isExpanded, setExpanded] = useState(false);

  // Change text of button
  const [textExpandShow, setTextExpandShow] = useState("Xem thông tin xe");

  // The ContextAPI to send id of vehciled we selected to home page
  const { idV, setIdV } = useContext(IdContext);


  // Set content for button hide and show infomation of vehicle
  const setExpandedFunc = (isExp) => {
    if (isExp) {
      setTextExpandShow("Ẩn thông tin xe");
    } else {
      setTextExpandShow("Xem thông tin xe");
    }
    setExpanded(!isExp);
  };

  return (
    <div className="filter_container">
      <div className="filter_action">
        <div className="til">
          <p>Lọc kết quả</p>
        </div>
        {/* isActive for display the list of vehicles */}
        <div
          className="cdropdown"
          onClick={(e) => {
            var xactive = !isActive;
            setActive(xactive);
          }}
        >
          <div className="dropdown-select">
            <span className="select"> {selected.id} </span>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>

          {isActive && (
            <div className="dropdown-list">
              {vehicles.map((item) => (
                <div
                  className="dropdown-list-item"
                  key={item.id}
                  onClick={() => {
                    setSelected(item);
                    // Hide List
                    setActive(false);
                    setVehicle(item);
                    setIdV(item.id);
                  }}
                >
                  {/* id means for "Biển số xe" */}
                  {item.id}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Display infomations of vehicles should be just in home (App) page */}
        {infoBtnDisplay && (
          <button
            id="add"
            className="submit"
            onClick={(e) => {
              setExpandedFunc(isExpanded);
            }}
          >
            {textExpandShow}
          </button>
        )}

        {/* The actions (crud) should be just in vehicles (Cars) manager page */}
        {btnDisplay && (
          <div className="btnManager">
            <button id="default" className="submit">
              Thiếp lập mặc định
            </button>
            <button id="add" className="submit">
              Thêm Xe
            </button>
            <button id="remove" className="submit">
              Xóa Xe
            </button>
          </div>
        )}
      </div>

      {/* Display infomation of vehicle */}
      {isExpanded && (
        <div className="filter_infodropdown">
          <h3>Thông tin cơ bản</h3>
          <p>
            <span>Biển số: </span>
            {selected.id}
          </p>
          <p>
            <span>Số điện thoại: </span>
            {selected.phone}
          </p>
          <p>
            <span>Thời gian lập: </span>
            {selected.datecf}
          </p>
        </div>
      )}
    </div>
  );
}
