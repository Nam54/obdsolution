import React from "react";
import logo from "../../src/asset/images/head-logo.jpg";
import "../../src/asset/styles/navbar.css";



export default function Navbar({username}) {
  return (
    <div className="logo">
      <img src={logo} alt="logo img" />
      <div className="navbar">
        <ul>
          <li>
            <a href="">QUẢN LÝ DỮ LIỆU</a>
          </li>
          <li>
            <a href="">CÀI ĐẶT THIẾT BỊ</a>
          </li>
          <li>
            <a href="">QUẢN LÝ THÀNH VIÊN</a>
          </li>
          <li>
            <a href="">VỀ CHÚNG TÔI</a>
          </li>
        </ul>

        <div className="account">
          <a href="">
            <i class="fa-regular fa-circle-user"></i>
            <p className="username">{username}</p>
          </a>
          <a href="">Logout</a>
        </div>


      </div>
    </div>
  );
}
