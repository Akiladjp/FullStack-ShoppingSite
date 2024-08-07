import React from "react";
import "./Navbar.css";
import logo from "../../assets/Frontend_Assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { Button } from "../Shared/Button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      title: "Shop",
      link: "/",
    },
    {
      id: 2,
      title: "Men",
      link: "/men",
    },
    {
      id: 3,
      title: "Women",
      link: "/women",
    },
    {
      id: 4,
      title: "Kids",
      link: "/kids",
    },
  ];

  return (
    <nav className="flex justify-between mt-5 shadow-md pb-4">
      <div className="flex ml-4">
        <img src={logo} alt="logo" className="w-12" />
        <p className="text-2xl font-bold flex items-center ml-2">SHOOTY</p>
      </div>
      <div className="flex w-full mx-8 gap-8 items-center justify-end">
        <ul className="flex gap-8">
          {navlinks.map((data) => (
            <li
              key={data.id}
              className="hover:underline underline-offset-4 hover:text-red-600"
            >
              <Link to={data.link}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 pl-20 mr-12 w-[200px] relative">
        <div className="flex items-center">
          <Link to="/login">
            <Button title="Login" />
          </Link>
        </div>
        <Link to="/cart">
          <FaCartArrowDown className="flex items-center h-full ml-4 text-xl" />
        </Link>
        <div className="absolute z-40 -right-2 top-0 bg-red-600 rounded-full w-3 h-3 text-[8px] flex items-center justify-center text-white font-bold">
          2
        </div>
      </div>
    </nav>
  );
};
