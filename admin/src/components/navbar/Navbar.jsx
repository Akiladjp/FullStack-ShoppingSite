import React from "react";
import logo from "../../assets/logo.png";
import admin from "../../assets/icon.png";

export const Navbar = () => {
  return (
    <div className="bg-blue-100 shadow-md">
      <div className="flex justify-between h-24">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-20"/>
          <h1 className="uppercase font-bold">shooty</h1>
        </div>
        <div className="flex items-center">
          <img src={admin} alt="" className="w-8 h-8 mr-8"/>
        </div>
      </div>
    </div>
  );
};
