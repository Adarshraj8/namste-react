 import {LOGO_URL} from "../utils/constants.js";
 import { useState } from "react";
import React from "react";

 const Header =()=>{
  // let btnName="Login";
   const [btnNameReact,setBtnNameReact]=useState("Login");
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
          className="login"
          onClick={()=>{
            btnNameReact=="Login" 
            ? setBtnNameReact("Logout")
            :setBtnNameReact("Login");
         
          }}
          >
            {btnNameReact}
          </button>
         </ul>
        </div>
      </div>
    );
  };

  export default Header;