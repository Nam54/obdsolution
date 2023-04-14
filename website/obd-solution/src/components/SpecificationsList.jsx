import React, { useState } from "react";
import "../../src/asset/styles/specificationList.css";

const visuallyIcon = <i class="fa-regular fa-eye"></i>;
const invisuallyIcon = <i class="fa-regular fa-eye-slash"></i>;

export default function SpecificationList(data) {
  const [icon, setIcon] = useState(visuallyIcon);

  return (
    <table>
      <thead>
        <tr>
          <th>Mã trường</th>
          <th>Tên trường</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {data.list.map((item) => (
          <tr key={item.s}>
            <td>{item.s}</td>
            <td>{item.n}</td>
            <td>
              <div>
                <button
                  className="spelist_btn mprimary"
                  onClick={(e) => {
                    if (item.v === true) {
                      item.v = false;
                    }
                    else{
                      item.v = true;
                    }
                  }}
                >
                  {icon}
                </button>

                <button className="spelist_btn msecondary">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
