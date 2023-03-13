import React from "react";
import "../../src/asset/styles/login.css";
import background from "../../src/asset/images/bus.svg";

export default function LoginComponent() {
  return (
    <div className="login">
      {/* <img src={background} alt="background" /> */}
      <div className="form">
        <form action="">
          <h2>ĐĂNG NHẬP</h2>
          {/* Error */}
          <div className="form-froup">

            <input type="text" name="username" id="username" placeholder="Username" />
          </div>
          <div className="form-froup">

            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <input type="submit" className="submitbtn" id="submit" value="Sign in"/>
        </form>
      </div>

      <div className="oops">
        <h1>
            OOPS!
            <br /> Có vẻ bạn chưa đăng nhập...
            <br />

        </h1>
      </div>
    </div>
  );
}
