import React from "react";
import "../../src/asset/styles/table.css";
import data from "../../src/asset/data/data2.json"
import useTable from "../hooks/useTable";
import styles from "../../src/asset/styles/Table.module.css";
import TableFooter from './TableFooter'






export default function Table() {
    
    console.log(data);
  return (
    <div>
      <div className="container">
        <table className="table-auto overflow-scroll w-full">
          <thead>
            <tr>
              <th>Time</th>
              <th>021</th>
              <th>022</th>
              <th>Pedal</th>
              <th>Throttle</th>
              <th>NE</th>
              <th>Map</th>
              <th>TA</th>
              <th>STFT</th>
              <th>LTFT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.TIME}>
                <td>
                  <div className="flex items-center gap-x-3">
                    <span>{item.TIME}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.O21}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.O22}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.PEDAL}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.THROTTLE}</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <span>{item.NE}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.MAP}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.TA}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.STFT}</span>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="flex items-center gap-x-3">
                    <span>{item.LTFT}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  );
}
