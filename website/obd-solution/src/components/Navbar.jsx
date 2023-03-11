import React from "react";
import logo from '../../src/asset/images/head-logo.jpg';
import '../../src/asset/styles/navbar.css';

console.log(logo);

export default function Navbar() {
  return (
    <div className="logo">
        <img src={logo} alt='logo img'/>
        <div className="navbar">
          <ul>
            <li><a href="">QUẢN LÝ DỮ LIỆU</a></li>
            <li><a href="">CÀI ĐẶT THIẾT BỊ</a></li>
            <li><a href="">QUẢN LÝ THÀNH VIÊN</a></li>
            <li><a href="">VỀ CHÚNG TÔI</a></li>
          </ul>

          <p className="username">User</p>
          <a href="">Logout</a>
        </div>
    </div>
  )
}
