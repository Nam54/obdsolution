import React, { useState, useEffect } from "react";
import "../../src/asset/styles/specificationList.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const visuallyIcon = <i class="fa-regular fa-eye"></i>;
const invisuallyIcon = <i class="fa-regular fa-eye-slash"></i>;

export default function SpecificationList({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    var accessToken = "";
    const c = document.cookie.split(";");
    c.forEach((e) => {
      let t = e.split("=");
      if (t[0].trim() === "access_token") accessToken = t[1];
    });

    console.log(accessToken);
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://192.168.1.7:3000/api/data/setup/${id.Vehicle_name}`,
          {
            headers: {
              authorization: accessToken,
            },
          }
        )
      ).json();

      setData(data);
    };

    console.log(data);
    dataFetch();
  }, [id.Vehicle_name]);

  // const changeView = (item) => {
  //   console.log(item);
  //   var accessToken = "";
  //   const c = document.cookie.split(";");
  //   c.forEach((e) => {
  //     let t = e.split("=");
  //     if (t[0].trim() === "access_token") accessToken = t[1];
  //   });

  //   const hideFetch = async () => {
  //     const data = await (
  //       await fetch(`http://192.168.1.7:3000/api/data/setup/hide?column=${item.ColunmName}&vehicle_name=${id.Vehicle_name}`, {
  //         headers: {
  //           authorization: accessToken,
  //         },
  //       })
  //     ).json();
  //       if(data.msg){
  //         toast.success(data.msg, {
  //           position: "bottom-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //           })
  //       }
  //       console.log(data.msg)
  //     // setData(data.vehicles);
  //   };
    
  //   hideFetch();
  // };

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
        {data.map((item) => (
          <tr key={item.ColunmName}>
            <td>{item.ColunmName}</td>
            <td>{item.Value}</td>
            <td>
              <div>
                <button
                  className="spelist_btn mprimary"
                  // onClick={changeView(item)}
                >
                  {item.State ? invisuallyIcon : visuallyIcon}
                </button>

                <button className="spelist_btn msecondary">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <ToastContainer/>
    </table>
  );
}
