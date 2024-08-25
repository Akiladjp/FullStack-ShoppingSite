import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { IoFileTrayFullOutline } from "react-icons/io5";
import cart from '../../assets/cart.png'
import box from '../../assets/box.png'

export const Sidebar = () => {
  return (
    <div className="bg-blue-100 w-48 h-[86vh] pt-8">
      <div className="font-semibold">
        <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
          <div className="flex items-center pl-4 mb-8 gap-3">
            <img src={cart} alt="" className="w-6"/>
            <p>Add Product</p>
          </div>
        </Link>

        <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
          <div className="flex items-center pl-4 gap-3">
            <img src={box} alt="" className="w-6"/>
            <p>Product List</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
