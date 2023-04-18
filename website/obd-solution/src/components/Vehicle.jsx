import React from "react";
import { useState, useEffect } from "react";
import "../../src/asset/styles/vehicle.css";
import Datepicker from "react-tailwindcss-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Vehicle({
  infoBtnDisplay,
  btnDisplay,
  dateDisplay,
  passVehicle,
  passDate,
}) {
  // Check dropdown list
  const [isActive, setActive] = useState(false);

  // Check if infomation area is expanded or not
  const [isExpanded, setExpanded] = useState(false);

  // Change text of button
  const [textExpandShow, setTextExpandShow] = useState("Xem thông tin xe");

  // Handle errors
  const [error, setError] = useState(null);
  // List of vehicles
  const [data, setData] = useState([
    {
      Vehicle_name: "",
      Phone_number: "",
      Last_fix: "",
    },
  ]);

  // State for add new vehicle form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [btnAdd, setBtnAdd] = useState("Thêm xe");
  const [isShowAdd, setIsShowAdd] = useState(false);

  // Check vehicle is selected in dropdown list
  const [selected, setSelected] = useState({
    Vehicle_name: "",
    Phone_number: "",
    Last_fix: "",
  });

  // Filter data by date
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const token = document.cookie.access_token;

  useEffect(() => {
    var accessToken = "";
    const c = document.cookie.split(";");
    c.forEach((e) => {
      let t = e.split("=");
      if (t[0].trim() === "access_token") accessToken = t[1];
    });

    const dataFetch = async () => {
      const data = await (
        await fetch(`http://194.233.103.107:8080/api/vehicle`, {
          headers: {
            authorization: accessToken,
          },
        })
      ).json();

      setData(data.vehicles);
    };
    console.log(data);
    dataFetch();
  }, []);

  // Set content for button hide and show infomation of vehicle
  const setExpandedFunc = (isExp) => {
    if (selected.Vehicle_name !== "") {
      var state = isExp;
      setExpanded(!state);
      if (state) {
        setTextExpandShow("Xem thông tin xe");
      } else {
        setTextExpandShow("Ẩn thông tin xe");
      }
    } else {
      toast.error("Bạn chưa chọn xe để xem thông tin", {
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
  };

  // To send value date

  // when click the add button
  const showAdd = () => {
    var state = isShowAdd;
    setIsShowAdd(!state);
    if (state) {
      setBtnAdd("Thêm xe");
    } else {
      setBtnAdd("Hủy thêm");
    }
  };

  // Submit form to API server
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
    fetch("http://194.233.103.107:8080/api/vehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        Vehicle_name: name,
        Don_vi_QL: "Elogis",
        Type: "Chưa xác định",
        VIN_number: "QWWE123456789",
        Engine: "Chưa xác định",
        Last_fix: "",
        Phone_number: phone,
        Driver: "Chưa xác định",
        Year_of_manufacture: "",
        Engine_number: "Chưa xác định",
        Mining_time: "10",
        History_fix: "01/04/2023",
        Registration_deadline: "01/04/2024",
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
          toast.success("Vehicle war created succesfully!", {
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
          setPhone("");
          setName("");
          setError(res.message);
        } else {
          setError("Some error occured");
        }
      });
  };

  return (
    <div className="filter_container">
      <div className="visually-hidden">
        {
          <ul>
            {data.map((val) => (
              <li>{val.name}</li>
            ))}
          </ul>
        }
      </div>
      <div className="filter_action">
        <div className="til">
          <p>Lọc kết quả</p>
        </div>
        {/* isActive for display the list of vehicles */}
        <div
          className="cdropdown"
          onClick={(e) => {
            var xactive = isActive;
            setActive(!xactive);
          }}
        >
          <div className="dropdown-select">
            <span className="select"> {selected.Vehicle_name} </span>
            <i class="fa-solid fa-circle-chevron-down"></i>
          </div>

          {isActive && (
            <div className="dropdown-list">
              {data.map((item) => (
                <div
                  className="dropdown-list-item"
                  key={item.Vehicle_name}
                  onClick={(e) => {
                    setSelected(item);
                    // Hide List
                    setActive(false);
                    console.log(item);
                    passVehicle(item);
                  }}
                >
                  {/* id means for "Biển số xe" */}
                  {item.Vehicle_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Display infomations of vehicles should be just in home (App) page */}
        {infoBtnDisplay && (
          <button
            id="add"
            className="submit"
            onClick={(e) => {
              setExpandedFunc(isExpanded);
            }}
          >
            {textExpandShow}
          </button>
        )}
        {/* Display date select range */}
        {dateDisplay && (
          <div className="date">
            <div className="datepicker">
              <Datepicker
                // primaryColor={"fuchsia"}
                value={value}
                onChange={handleValueChange}
                showShortcuts={false}
              />
            </div>
            {/* <TimePicker onChange={onChange} value={value} /> */}

            <div
              class="relative"
              id="timepicker-inline-12"
              data-te-input-wrapper-init
            >
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="form2"
              />
              <label
                for="form2"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Select a time
              </label>
            </div>
            <button
              className="submit"
              onClick={() => {
                toast.info("Chức năng này hiện chưa khả dụng!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              Lọc kết quả
            </button>
            <ToastContainer />
          </div>
        )}

        {/* The actions (crud) should be just in vehicles (Cars) manager page */}
        {btnDisplay && (
          <div className="btnManager">
            <button
              id="default"
              className="submit"
              onClick={() => {
                toast.info("Chức năng này hiện chưa khả dụng!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              Thiết lập mặc định
            </button>
            <button id="add" className="submit" onClick={showAdd}>
              {btnAdd}
            </button>
            <button
              id="remove"
              className="submit"
              onClick={() => {
                toast.info("Chức năng này hiện chưa khả dụng!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              Xóa Xe
            </button>
          </div>
        )}
      </div>

      {/* Display infomation of vehicle */}
      {isExpanded && (
        <div className="filter_infodropdown">
          <h3>Thông tin cơ bản</h3>
          <p>
            <span>Biển số: </span>
            {selected.Vehicle_name}
          </p>
          <p>
            <span>Số điện thoại: </span>
            {selected.Phone_number}
          </p>
          <p>
            <span>Lần sửa chữa cuối </span>
            {selected.Last_fix}
          </p>
        </div>
      )}

      {/* Display form to add new vehicle */}
      {isShowAdd && (
        <div className="form_add_vehicle">
          <form action="post" onSubmit={handleSubmit}>
            <div>
              <div className="formrow inp">
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="nameadd"
                  placeholder="Tên xe"
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="phone" className="visually-hidden">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phoneadd"
                  placeholder="Số điện thoại"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formrow btnsm">
                <button className="submit addSubmit"> Thêm </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
