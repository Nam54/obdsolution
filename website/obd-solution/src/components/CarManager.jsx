import React, { useState } from "react";

import "../../src/asset/styles/carmanager.css";
import img from "../../src/asset/images/valet-parking.jpg";
import SpecificationList from "./SpecificationsList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CarManager({ Vehicle }) {
  // Vehicle was selected from Vehicle component
  console.log(Vehicle);

  // State for show or hide form add specification
  const [showSpecifications, setShowSpecifications] = useState(false);

  // State for change text of button when clicked
  const [textBtnShow, setTextBtnShow] = useState("Thêm trường");

  // State for get information about specified added
  const [id, setId] = useState(-1);
  const [name, setName] = useState("");

  // State for handle errors if existing
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    // Prevent form submission on first load
    event.preventDefault();

    var accessToken = "";
    const c = document.cookie.split(";");
    c.forEach((e) => {
      let t = e.split("=");
      if (t[0].trim() === "access_token") accessToken = t[1];
    });

    // Post data got to the server
    fetch("http://localhost:8080/api/data/setup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        vehicle_name: Vehicle.Vehicle_name,
        ColunmName: id,
        Value: name,
      }),
      mode: "cors",
      credentials: "same-origin",
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("An error was occured", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.log(response);
        return response.json();
      })
      .then((res) => {
        console.log(res.code);
        if (res.code === 200) {
          toast.success("Member war created succesfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.status === 401) {
          setId("");
          setName("");
          setError(res.message);
          setIsError(true);
        } else {
          setError("Some error occured");
        }
      });
  };

  // Function to change text of button when clicked and change state of form
  const callSet = () => {
    var state = showSpecifications;
    setShowSpecifications(!state);
    if (state) {
      setTextBtnShow("Thêm trường");
    } else {
      setTextBtnShow("Hủy");
    }
  };

  // Render UI
  return (
    <div className="custom2_container">
      <ToastContainer />
      <div className="info_cars">
        <h1>Thông tin xe</h1>
        <div className="hint">
          <p>Sửa thông tin để cập nhật:</p>
        </div>
        <form action="" className="info_form">
          <div className="form_col">
            {/* Group for name of vehicle */}
            <div className="form_group">
              <label htmlFor="name" className="label">
                Biển số
              </label>
              <input
                disabled
                name="name"
                type="text"
                id="name"
                placeholder="Biển số"
                defaultValue={Vehicle.Vehicle_name}
              />
            </div>
            {/* Group for phone */}
            <div className="form_group">
              <label htmlFor="phone" className="label">
                Số điện thoại
              </label>
              <input
                disabled
                name="phone"
                type="text"
                id="phone"
                placeholder="Số điện thoại"
                defaultValue={Vehicle.Phone_number}
              />
            </div>
          </div>

          {/* Middle image, just for UI */}
          <div className="middle">
            <img src={img} alt="m" />
          </div>

          <div className="form_col">
            {/* Group for time set up vehicle */}
            <div className="form_group">
              <label htmlFor="time" className="label">
                Lần sửa chữa cuối cùng
              </label>
              <input
                disabled
                type="text"
                id="idc"
                placeholder="Lần sửa cuối"
                defaultValue={Vehicle.Last_fix}
              />
            </div>
            <div className="form_group">
              <label htmlFor="lposc" className="label">
                Động cơ
              </label>
              <input
                disabled
                type="text"
                id="idc"
                placeholder="Động cơ"
                defaultValue={Vehicle.Engine}
              />
            </div>
          </div>
          <div className="submition">
            <button
              
              className="submit"

            >
              Lưu
            </button>
          </div>
        </form>

        <h1>Thông số kỹ thuật</h1>
        <div className="hint">
          <p>Bạn có thể nhập tối đa 40 trường dữ liệu</p>
        </div>

        {/* Form to add specification */}
        {showSpecifications && (
          <form action="post" onSubmit={handleSubmit}>
            <div id="addSpecification">
              <div className="addSpecification_input">
                <label htmlFor="idS" className="visually-hidden">
                  Mã trường
                </label>
                <input
                  type="number"
                  id="idS"
                  name="idS"
                  placeholder="Mã trường (chỉ nhập số)"
                  onChange={(e) => setId(e.target.value)}
                />
              </div>

              <div className="addSpecification_input">
                <label htmlFor="nameS" className="visually-hidden">
                  Tên trường
                </label>
                <input
                  type="text"
                  id="nameS"
                  name="nameS"
                  placeholder="Tên trường"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <button id="addSpecification_btn2" className="submit" type="submit">
              Lưu
            </button>
          </form>
        )}

        <div className="addSpecification_btns">
          <button
            id="addSpecification_btn1"
            className="submit"
            onClick={callSet}
          >
            {textBtnShow}
          </button>
        </div>

        <div className="SpeList">
          <SpecificationList id={Vehicle} />
        </div>
      </div>
    </div>
  );
}
