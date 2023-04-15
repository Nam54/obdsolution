import React, { useState, useEffect } from "react";
import "../../src/asset/styles/table.css";
import { CSVDownload, CSVLink } from "react-csv";
import useTable from "../hooks/useTable";
import TableFooter from "./TableFooter";

const mapHeader = (column) => {
  const headers = [];

  for (let c of column) {
    var header = {};
    header.label = c;
    header.key = c;
    headers.push(header);
  }

  return headers;
};

export default function Table({ rowsPerPage, Vehicle }) {
  const col = ["1", "2", "3"];
  const dat = [
    { 1: "asdf", 2: "ashndfdf", 3: "asdsfsta" },
    { 1: "asjmdf", 2: "ash6grndfdf", 3: "asdsfsa" },
    { 1: "assdf", 2: "asn4hndfdf", 3: "asdsfysa" },
    { 1: "asdf", 2: "ashndefdf", 3: "asdsrfsa" },
  ];

  const [spec, setSpec] = useState([]);
  const [page, setPage] = useState(1);

  const { slice, range } = useTable(spec, page, rowsPerPage);
  const [column, setColumn] = useState([]);
  console.log(Vehicle);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://192.168.1.7:8080/api/data?vehicle_name=${Vehicle.Name}&limit=10`
        )
      ).json();

      setSpec(data.data);

      setColumn(Object.keys(data.data[0]));
    };
    console.log(column);
    dataFetch();
  }, [Vehicle.Name]);

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

      <div className="downloadAction">
        <button className="btnDown allp">
          <CSVLink
            data={spec}
            headers={mapHeader(column)}
            filename={Vehicle.Name}
            target="_blank"
          >
            Download All Data
          </CSVLink>
        </button>

        {/* <button className="btnDown thisp">
          Download This Page
          <span>CSV fiel</span>
        </button> */}
      </div>
    </div>
  );
}
