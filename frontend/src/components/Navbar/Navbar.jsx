import React, { useContext, useState } from "react";
import logo from "../../assets/Frontend_Assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { Button } from "../Shared/Button";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

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
    {
      id: 5,
      title: "Sports",
      link: "/sports",
    },
  ];

  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <nav className="flex justify-between pt-5 shadow-md pb-4 fixed z-50 w-full bg-gray-800 text-white ">
      <div className="flex ml-4">
        <img src={logo} alt="logo" className="w-12" />
        <p className="text-2xl font-bold flex items-center ml-2">SHOOTY</p>
      </div>
      <div className="flex w-full mx-8 gap-8 items-center justify-end">
        <ul className="flex gap-8">
          {navlinks.map((data) => (
            <li
              key={data.id}
              className={`hover:font-bold  ${
                active === data.link ? "bg-white text-gray-500 px-2 rounded-lg font-bold" : " "
              }`}
              onClick={() => setActive(data.link)}
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
          {getTotalCartItems()}
        </div>
      </div>
    </nav>
  );
};
