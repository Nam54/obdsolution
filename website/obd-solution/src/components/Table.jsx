import React, { useState, useEffect } from "react";
import "../../src/asset/styles/table.css";

import useTable from "../hooks/useTable";
import TableFooter from "./TableFooter";

export default function Table({ rowsPerPage, NameOfVehicle }) {
  const [spec, setSpec] = useState([]);
  const [page, setPage] = useState(1);

  const { slice, range } = useTable(spec, page, rowsPerPage);
  const [column, setColumn] = useState([]);
  console.log(NameOfVehicle)
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://192.168.1.7:3000/api/data?vehicle_name=${NameOfVehicle}&limit=10`
        )
      ).json();

      setSpec(data.data);

      setColumn(Object.keys(data.data[0]));
    };
    console.log(column);
    dataFetch();
  }, [NameOfVehicle]);

  return (
    <div>
      <div className="tble_container">
        <table className="table-auto overflow-scroll w-full center">
          <thead>
            <tr>
              {column.map((c) => (
                <th>
                  {" "}
                    <div className="flex items-center gap-x-3">
                      <span>{c}</span>
                    </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slice.map((item) => (
              <tr key={item.TIME}>
                {column.map((c) => (
                  <td>
                    {" "}
                    <div className="flex items-center gap-x-3">
                      <span>{item[c]}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}
