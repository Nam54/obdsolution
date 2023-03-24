import React from "react";
import "../../src/asset/styles/member.css";

export default function Member() {
  return (
    <div className="custom_container">
      <div className="add_member">
        <div className="custom_form">
          <h2>Thêm thành viên</h2>
          <form action="">
            <input type="text" placeholder="Thêm thành viên" id="name" />
            <input type="text" placeholder="Password" id="password" />
            <select
              name="role"
              id="role"
              defaultValue="Vai trò"
              className="select"
            >
              <option value="Admin">Admin</option>
              <option value="Protecter">Protecter</option>
              <option value="Member">Member</option>
              <option value="Viewer">Viewer</option>
            </select>

            <button type="submit" id="submit" className="submit">
              <i class="fa-solid fa-user-plus">  </i>
               
            </button>
          </form>
        </div>
      </div>
      <div className="edit_member"></div>
    </div>
  );
}
