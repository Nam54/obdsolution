import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import LoginCom from "../../components/Login";
import './Login.css'

export default function Login(){

    return (
        <div>
            <Navbar />
            <LoginCom/>
        </div>
    );
}