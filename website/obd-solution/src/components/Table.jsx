import React, { useState, useEffect } from "react";
import "../../src/asset/styles/table.css";
import { CSVLink } from "react-csv";
import useTable from "../hooks/useTable";
import TableFooter from "./TableFooter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// make header for CSV file from column of table
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

// Replace '.' to '_' when download file
const removeDot=(bx)=>{
      return bx
}

// Component
export default function Table({ rowsPerPage, Vehicle, Date }) {
  console.log(Vehicle)
  // Pagination section
  const [spec, setSpec] = useState([]);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(spec, page, rowsPerPage);

  // Get cloumns of data 
  const [column, setColumn] = useState([]);
  // Fetch data when change vehicle

  
  useEffect(() => {

    var accessToken = ''
    const c = document.cookie.split(';');
    c.forEach(e => {
      let t = e.split('=');
      if(t[0].trim() === 'access_token') accessToken= t[1];  
    })

    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://192.168.1.7:3000/api/data?vehicle_name=${Vehicle.Vehicle_name}&limit=20`,{
            headers: {
              authorization:accessToken
            }
          }
          
        )
      ).json()
      

      // Set specifications
      if(data.code===401){
        toast.error('Data was not setup correctly, please setup data first', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }else{
        setSpec(data.data);
      }
      
      // Set column
      setColumn(Object.keys(data.data[0]));
    };
    dataFetch();
  }, [Vehicle.Vehicle_name]);



  // Renderings
  return (
    <div>
      <div className="tble_container">
        <ToastContainer/>
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

      {/* Download button bar */}
      <div className="downloadAction">
        <button className="btnDown allp">
          <CSVLink
            data={spec}
            headers={mapHeader(column)}
            filename={removeDot(Vehicle.Name)}
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
