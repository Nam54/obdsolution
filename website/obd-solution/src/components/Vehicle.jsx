import React from "react";
import { useState, useContext, useEffect } from "react";
import "../../src/asset/styles/vehicle.css";
import IdContext from "../contexts/IdContext";

export default function Vehicle({ infoBtnDisplay, btnDisplay, passName }) {
  // Check dropdown list
  const [isActive, setActive] = useState(false);

  // Check if infomation area is expanded or not
  const [isExpanded, setExpanded] = useState(false);

  // Change text of button
  const [textExpandShow, setTextExpandShow] = useState("Xem thông tin xe");

  // The ContextAPI to send id of vehciled we selected to home page
  const { idV, setIdV } = useContext(IdContext);

  // Loading status
  const [loading, setLoading] = useState(true);

  // Handle errors
  const [error, setError] = useState(null);
  // List of vehicles
  const [data, setData] = useState([
    {
      Name: "",
      SetUpTime: "",
      Phone: "",
    },
  ]);

  // Check vehicle is selected in dropdown list
  const [selected, setSelected] = useState(data[0]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await(
        await fetch(`http://192.168.1.7:3000/api/vehicle/Kha_pham`)
      ).json();

      setData(data.vehicles);
    };

    dataFetch();
  }, []);


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
      <div className="visually-hidden">
        {
          <ul>
            {data.map((val) => (
              <li>{val.name}</li>
            ))}
          </ul>
        }
      </div>
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
            <span className="select"> {selected.Name} </span>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>

          {
            isActive && (
              <div className="dropdown-list">
              {data.map((item) => (
                <div
                  className="dropdown-list-item"
                  key={item.Name}
                  onClick={(e) => {
                    setSelected(item);
                    // Hide List
                    setActive(false);
                    passName(item.Name);
                    setIdV(item.Name);
                    console.log(item.Name);
                  }}
                >
                  {/* id means for "Biển số xe" */}
                  {item.Name}
                </div>
              ))}
            </div>
            )
          }
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
            {selected.Name}
          </p>
          <p>
            <span>Số điện thoại: </span>
            {selected.Phone}
          </p>
          <p>
            <span>Thời gian lập: </span>
            {selected.SetUpTime}
          </p>
        </div>
      )}
    </div>
    // <ul>
    //   {data.map((val) => (
    //     <li>{val.name}</li>
    //   ))}
    // </ul>
  );
}
