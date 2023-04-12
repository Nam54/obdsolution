import React from "react";
import { useState, useEffect } from "react";
import "../../src/asset/styles/verhice.css";

const verhiceid = [
  { id: "59-GH19894" },
  { id: "59-GH02839" },
  { id: "59-GH10343" },
  { id: "59-GH18972" },
  { id: "59-GH86353" },
];
const verhice = [
  {
    id: verhiceid[0].id,
    phone: "03927192812",
    datecf: "1/1/2023",
  },
  {
    id: verhiceid[1].id,
    phone: "03927192382",
    datecf: "1/1/2023",
  },
  {
    id: verhiceid[2].id,
    phone: "03927190802",
    datecf: "1/1/2023",
  },
  {
    id: verhiceid[3].id,
    phone: "01230192812",
    datecf: "1/1/2023",
  },
  {
    id: verhiceid[4].id,
    phone: "039123192812",
    datecf: "1/1/2023",
  },
];

export default function Verhice({ infoBtnDisplay, btnDisplay }) {
  // Check dropdown list
  const [isActive, setActive] = useState(false);

  // Check verhice is selected in dropdown list
  const [selected, setSelected] = useState(verhice[0]);

  // Check if infomation area is expanded or not
  const [isExpanded, setExpanded] = useState(false);

  // Change text of button
  const [textExpandShow, setTextExpandShow] = useState("Xem thông tin xe");

  // List of verhices
  const [verhices, setVerhices] = useState(null)

  // Loading status
  const [loading, setLoading] = useState(true);

  // Handle errors
  const [error, setError] = useState(null);

  // Fetching list of verhices from APIs server

  useEffect(() => {
    fetch(`http://194.233.103.107:3000/api/vehicle`).then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.vehicles;
    })
    .then((data) =>{
      setVerhices(data);
      setError(null)
    })
    .catch((err) => {
      setError(err.message);
      setVerhices(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  const setExpandedFunc = (isExp) => {
    if (isExp) {
      setTextExpandShow("Ẩn thông tin xe");
    } else {
      setTextExpandShow("Xem thông tin xe");
    }
    setExpanded(!isExp);
  };

  // Fetching data form APIs when have a vehicle is selected
  const verhiceChange = (e) => {
    // Use Hook to set verhice's selected
    setSelected();
    // Hide List
    setActive(false);
  };

  return (
    <div className="filter_container">
      <div className="filter_action">
        <div className="til">
          <p>Lọc kết quả</p>
        </div>
        {/* isActive for display the list of verhices */}
        <div className="cdropdown" onClick={(e) => setActive(!isActive)}>
          <div className="dropdown-select">
            <span className="select"> {selected.id} </span>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>

          {isActive && (
            <div className="dropdown-list">
              {verhice.map((item) => (
                <div
                  className="dropdown-list-item"
                  key={item.id}
                  onClick={verhiceChange}
                >
                  {/* id means for "Biển số xe" */}
                  {item.id}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Display infomations of verhices should be just in home (App) page */}
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

        {/* The actions (crud) should be just in verhices (Cars) manager page */}
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

      {/* Display infomation of verhice */}
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
