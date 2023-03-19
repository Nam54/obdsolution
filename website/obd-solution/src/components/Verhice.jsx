import React from "react";
import { useState } from "react";
import "../../src/asset/styles/verhice.css";

const verhices = ["Xe 01", "Xe 02", "Xe 03", "Xe 04", "Xe 05"];

export default function Verhice() {
  const [isActive, setActive] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="container">
      <div className="dropdown" onClick={(e) => setActive(!isActive)}>
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
    </div>
  );
}
