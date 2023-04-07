import React from "react";

import "../../src/asset/styles/carmanager.css";
import img from "../../src/asset/images/valet-parking.jpg";

const vhc1 = {
  id: "59-8H 17904",
  named: "xe 01",
  lastPos: "1017 LVL",
  phone: "0386379007",
};

export default function CarManager() {
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
      </div>
    </div>
  );
}
