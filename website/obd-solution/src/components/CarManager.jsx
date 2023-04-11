import React, { useState } from "react";

import "../../src/asset/styles/carmanager.css";
import img from "../../src/asset/images/valet-parking.jpg";
import SpecificationList from "./SpecificationsList";

const vhc1 = {
  id: "59-8H 17904",
  named: "xe 01",
  lastPos: "1017 LVL",
  phone: "0386379007",
  spe:[    
    {'s': 1,'n':'Xăng','v':true},
    {'s': 2,'n':'Nhớt','v':true},
    {'s': 3,'n':'Dung tích','v':false},
    {'s': 5,'n':'Gia tốc','v':false},
    {'s': 6,'n':'Độ trễ','v':true},
    {'s': 7,'n':'Vận tốc tối đa','v':false},
    {'s': 8,'n':'KM','v':true},
    {'s': 10,'n':'DC','v':true},
  ]
};



export default function CarManager() {
  const [showSpecifications, setShowSpecifications] = useState(false);

  const [textBtnShow, setTextBtnShow] = useState("Thêm trường");

  const callSet = () => {
    var state = showSpecifications;
    setShowSpecifications(!state);
    if (state) {
      setTextBtnShow("Thêm trường");
    } else {
      setTextBtnShow("Hủy");
    }
  };
  return (
    <div className="custom2_container">
      <div className="info_cars">
        <h1>Thông tin xe</h1>
        <div className="hint">
          <p>Sửa thông tin để cập nhật:</p>
        </div>
        <form action="" className="info_form">
          <div className="form_col">
            <div className="form_group">
              <label htmlFor="namec" className="label">
                Tên xe
              </label>
              <input
                type="text"
                id="namec"
                placeholder="Tên xe"
                defaultValue={vhc1.named}
              />
            </div>
            <div className="form_group">
              <label htmlFor="idc" className="label">
                Biển số xe
              </label>
              <input
                type="text"
                id="idc"
                placeholder="Biển số xe"
                defaultValue={vhc1.id}
              />
            </div>
          </div>
          <div className="middle">
            <img src={img} alt="m" />
          </div>
          <div className="form_col">
            <div className="form_group">
              <label htmlFor="phonec" className="label">
                Số điện thoại
              </label>
              <input
                type="text"
                id="idc"
                placeholder="Số điện thoại"
                defaultValue={vhc1.phone}
              />
            </div>
            <div className="form_group">
              <label htmlFor="lposc" className="label">
                Vị trí cuối cùng
              </label>
              <input
                type="text"
                id="idc"
                placeholder="Vị trí cuối cùng"
                defaultValue={vhc1.lastPos}
              />
            </div>
          </div>
          <div className="submition">
            <button id="default" className="submit">
              Lưu
            </button>
          </div>
        </form>

        <h1>Thông số kỹ thuật</h1>
        <div className="hint">
          <p>Bạn có thể nhập tối đa 40 trường dữ liệu</p>
        </div>

        {showSpecifications && (
          <div id="addSpecification_input">
            <div className="form_group" id="addSpecification_input">
              <label htmlFor="idS" className="visually-hidden">
                Mã trường
              </label>
              <input
                type="number"
                id="idS"
                placeholder="Mã trường (chỉ nhập số)"
              />
            </div>

            <div className="form_group" id="addSpecification_input">
              <label htmlFor="idS" className="visually-hidden">
                Tên trường
              </label>
              <input type="text" id="idS" placeholder="Tên trường" />
            </div>
          </div>
        )}

        <div className="addSpecification_btns">
          <button
            id="addSpecification_btn1"
            className="submit"
            onClick={callSet}
          >
            {textBtnShow}
          </button>

          {showSpecifications && (
            <button id="addSpecification_btn2" className="submit">
              Lưu
            </button>
          )}
        </div>

        <div className="SpeList">
            <SpecificationList list={vhc1.spe}/>
        </div>
      </div>
    </div>
  );
}
