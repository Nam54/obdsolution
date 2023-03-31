import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/asset/images/head-logo.jpg";
import "../../src/asset/styles/navbar.css";



export default function Navbar({username}) {
  return (
    <div className="logo">
      <img src={logo} alt="logo img" />
      <div className="navbar">
        <ul>
          <li>
            <Link to='/'>QUẢN LÝ DỮ LIỆU</Link>
          </li>
          <li>
            <Link to='/verhices'>CÀI ĐẶT THIẾT BỊ</Link>
          </li>
          <li>
            <Link to='/users'>QUẢN LÝ THÀNH VIÊN</Link>
          </li>
          <li>
            <Link to='/abouts'>VỀ CHÚNG TÔI</Link>
          </li>
        </ul>

        <div className="account">
          <Link>
            <i class="fa-regular fa-circle-user"></i>
            <p className="username">{username}</p>
          </Link>
          <Link to='/login'>Logout</Link>
        </div>


      </div>
    </div>
  );
}
