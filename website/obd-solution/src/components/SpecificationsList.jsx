import React from "react";
import "../../src/asset/styles/specificationList.css";

export default function SpecificationList(list) {
  console.log(list);
  return (
    <table>
      <thead>
        <tr>
          <th>Mã trường</th>
          <th>Tên trường</th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
        {list.list.map((item) => (
          <tr key={item.s}>
            <td>{item.s}</td>
            <td>{item.n}</td>
            <td>
              <div>
                <button className="spelist_btn mprimary" >
                  <i class="fa-regular fa-eye"></i>
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
