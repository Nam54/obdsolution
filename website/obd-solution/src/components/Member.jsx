import React from "react";
import "../../src/asset/styles/member.css";
import Search from "./SearchBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const users = [
  { id: "1", fullname: "Kha" },
  { id: "2", fullname: "Cường" },
  { id: "3", fullname: "Danh" },
  { id: "4", fullname: "Long" },
  { id: "5", fullname: "Hoa" },
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
  // Name of user added
  const [name, setName] = useState("");
  // Password of user added
  const [password, setPassword] = useState("");
  // Forhandling errors
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  // Search bar section
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredUsers = filterUser(users, searchQuery);


   // List of vehicles
   const [data, setData] = useState([
    {
      Name: "",
      SetUpTime: "",
      Phone: "",
    },
  ]);

  useEffect(() => {

    var accessToken = ''
    const c = document.cookie.split(';');
    c.forEach(e => {
      let t = e.split('=');
      if(t[0].trim() === 'access_token') accessToken= t[1];  
    })

    const dataFetch = async () => {
      const data = await (
        await fetch(`http://194.233.103.107:8080/api/vehicle`,{
          headers: {
            authorization:accessToken
          }
        })
      ).json();
      
      setData(data.vehicles);
    };
    console.log(data);
    dataFetch();
  }, []);


  // When the form was submitted
  const handleSubmit = (event) => {

    // Prevent form submission on first load
    event.preventDefault();
  
    var accessToken = ''
    const c = document.cookie.split(';');
    c.forEach(e => {
      let t = e.split('=');
      if(t[0].trim() === 'access_token') accessToken= t[1];  
    })
    // Post data got to the server
    fetch("http:/194.233.103.107:8080/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:accessToken
        // 'Content-Type': 'application/x-www-form-urlencoded',
        
      },
      body: JSON.stringify({
        name: name,
        password: password,
        "address": ""
      }),
      mode:'cors',
      credentials:'same-origin'
    })
      .then((response) => {
        if (!response.ok) {
          toast.error('An error was occured', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })

        }
        
        return response.json();
      })
      .then((res) => {
        console.log(res.code);
        if (res.code === 200) {
          toast.success('Member war created succesfully!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        } else if (res.code === 409) {
          setName("");
          setPassword("");
          setError(res.message);
          setIsError(true);
          
        } else {
          setError("Some error occured");
        }
      });
  };
  
  return (
    <div className="custom_container">
      <div className="add_member">
        <div className="custom_form">
          <h2>Thêm thành viên</h2>
          <form action="post" onSubmit={handleSubmit} >
            <label htmlFor="name" className="visually-hidden">Name </label>
            <input type="text" placeholder="Thêm thành viên" id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input type="password" placeholder="Password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
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

            <button type="submit" className="submit">
             Thêm
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
              {data.map((verh) => (
                <div className="verhice" key={verh.Vehicle_name}>
                  {verh.Vehicle_name}
                  <Link to="/car">
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
                <label htmlFor=""></label>
                <input type="text" placeholder="Tên thành viên" id="name" name="name" />
                <input type="password" placeholder="Password" id="password" name="password" />
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
      <ToastContainer/>
    </div>
  );
}
