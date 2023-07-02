import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../../src/asset/images/head-logo.jpg";
import "../../src/asset/styles/navbar.css";
import UserProfile from "./UserProfile.js";


export default function Navbar() {



  var accessToken = "";
    const c = document.cookie.split(";");
    c.forEach((e) => {
      let t = e.split("=");
      if (t[0].trim() === "access_token") accessToken = t[1];
    });


  
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo img" />
      </div>
      <nav className="navbar" id="navbar">
        {
          (UserProfile.getName()!=='') && (  <ul>
            <li>
              <Link to="/data">QUẢN LÝ DỮ LIỆU</Link>
            </li>
            <li>
              <Link to="/cars">CÀI ĐẶT THIẾT BỊ</Link>
            </li>
            <li>
              <Link to="/users">QUẢN LÝ THÀNH VIÊN</Link>
            </li>
            <li>
              <Link to="/abouts">VỀ CHÚNG TÔI</Link>
            </li>
          </ul>)

          
        }
      

        <div className="account">
          <Link>
            <i class="fa-regular fa-circle-user"></i>
            <p className="username">{UserProfile.getName()}</p>
          </Link>
          <Link to="/" onClick={(e)=>{
            UserProfile.setName('');
          }}>Logout</Link>
        </div>
      </nav>
    </div>
  );
}
