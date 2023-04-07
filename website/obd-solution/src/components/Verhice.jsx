import React from "react";
import { useState } from "react";
import "../../src/asset/styles/verhice.css";
import Datepicker from "react-tailwindcss-datepicker";

const verhices = ["Xe 01", "Xe 02", "Xe 03", "Xe 04", "Xe 05"];

export default function Verhice({ dateDisplay, btnDisplay }) {
  const [isActive, setActive] = useState(false);
  const [selected, setSelected] = useState(verhices[0]);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handelDateChanged = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="filter_container">
      <div className="til">
        <p>Lọc kết quả</p>
      </div>
      <div className="cdropdown" onClick={(e) => setActive(!isActive)}>
        <div className="dropdown-select">
          <span className="select"> {selected} </span>
          <i class="fa-solid fa-circle-chevron-down"></i>
        </div>
        {isActive && (
          <div className="dropdown-list">
            {verhices.map((item) => (
              <div
                className="dropdown-list-item"
                key={item}
                onClick={(e) => {
                  setSelected(item);
                  setActive(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {dateDisplay && (
        <div className="date">
          <Datepicker
            value={date}
            onChange={handelDateChanged}
            inputClassName="font-medium"
          />
        </div>
      )}

      {btnDisplay && (
        <div className="btnManager">
          <button type="submit" id="submit" className="submit">
            Thiếp lập mặc định
          </button>
        </div>
      )}
    </div>
  );
}
