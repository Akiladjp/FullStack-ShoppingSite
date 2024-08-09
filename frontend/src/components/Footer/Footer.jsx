import React from "react";
import logo from "../../assets/Frontend_Assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export const Footer = () => {
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

  return (
    <div className="my-8">
      <hr className="w-[64%] mx-auto border-black" />
      <div className="flex flex-col gap-8 items-center mt-8">
        <div className="w-40">
          <img src={logo} alt="logo" />
          <h1 className="flex justify-center text-[28px] font-bold">SHOOTY</h1>
        </div>
        <ul className="flex text-[12px] justify-center w-full gap-8">
          {navlinks.map((data, index) => (
            <div key={index}>
              <a href={data.link}>
                <li
                  key={data.id}
                  className="hover:text-red-600 hover:-translate-y-1 hover:font-bold"
                >
                  {data.title}
                </li>
              </a>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex my-8 gap-6 justify-center text-2xl">
        <FaWhatsapp />
        <FaInstagram />
        <CiFacebook />
      </div>
      <hr className="w-[64%] mx-auto border-black" />
      <div className="flex flex-col my-12">
        <p className="flex justify-center text-[12px]">
          Copyright @2024 - All Right Reserved
        </p>
        <p className="flex justify-center text-[10px]">
          Design by CodeWeave Technology
        </p>
      </div>
    </div>
  );
};
