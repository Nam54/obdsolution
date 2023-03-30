import React from "react";
import "../../src/asset/styles/member.css";
import Search from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const users = [
  { id: "1", fullname: "John" },
  { id: "2", fullname: "Lier 1" },
  { id: "3", fullname: "Heart Breaker" },
  { id: "4", fullname: "Unused" },
  { id: "5", fullname: "Javascript" },
];

const verhices = [
  { id: "U1_1", bx: "59-GH19894" },
  { id: "U1_2", bx: "59-GH02839" },
  { id: "U1_3", bx: "59-GH10343" },
  { id: "U1_4", bx: "59-GH18972" },
  { id: "U1_5", bx: "59-GH86353" },
];

const filterUser = (users, query) => {
  if (!query) {
    return [];
  }

  return users.filter((user) => {
    const userName = user.fullname.toLowerCase();
    return userName.includes(query);
  });
};

export default function Member() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredUsers = filterUser(users, searchQuery);

  return (
    <div className="custom_container">
      <div className="add_member">
        <div className="custom_form">
          <h2>Thêm thành viên</h2>
          <form action="">
            <input type="text" placeholder="Thêm thành viên" id="name" />
            <input type="password" placeholder="Password" id="password" />
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
              <i className="fa-solid fa-user-plus"> </i>
            </button>
          </form>
        </div>

        <div className="search">
          <div className="searchbar">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div className="result">
            <ul>
              {filteredUsers.map((user) => (
                <li key={user.id}> {user.fullname} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="edit_member">
        <div>
          <h2>Name</h2>
        </div>
        <div>
          <div>
            <h4>Xe sở hữu</h4>
            <div className="list_verhices">
              {verhices.map((verh) => (
                <div className="verhice" key={verh.id}>
                  {verh.bx}
                  <Link to="/verhices">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="edit_info">
            <h4>Thông tin thành viên</h4>
            <form action="">
              <div className="gr1">
                <input type="text" placeholder="Tên thành viên" id="name" />
                <input type="password" placeholder="Password" id="password" />
              </div>

              <div className="gr2">
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
                <input type="text" placeholder="Địa chỉ" id="password" />
              </div>

              <button type="submit" id="submit" className="submit">
              <i class="fa-solid fa-floppy-disk"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
