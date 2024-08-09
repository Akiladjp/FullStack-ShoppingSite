import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { Button } from "../Shared/Button";
import { ShopContext } from "../../context/ShopContext";

export const Productdisplay = (props) => {
  const { product } = props;

  const {addToCart} = useContext(ShopContext);

  return (
    <div>
      <div className="flex mx-auto w-[75%] mt-6">
        <div className="flex">
          <div className="flex flex-col gap-3 mr-3">
            <img src={product.image} alt="" className="w-20" />
            <img src={product.image} alt="" className="w-20" />
            <img src={product.image} alt="" className="w-20" />
            <img src={product.image} alt="" className="w-20" />
          </div>
          <img src={product.image} alt="" className="" />
        </div>
        <div className="flex flex-col ml-20">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="text-[12px]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex gap-2 mt-1">
            <div className="flex mt-1 text-red-600">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p>(122)</p>
          </div>
          <div className="flex gap-12 mt-4 mb-2">
            <h1 className="font-semibold">${product.new_price}</h1>
            <h1 className="font-light line-through">${product.old_price}</h1>
          </div>
          <div>
            <h1 className="font-bold text-xl mt-6 mb-2">Select Size</h1>
            <div className="flex gap-8">
              <button className="px-3 py-1 bg-slate-100 border hover:bg-slate-200">
                S
              </button>
              <button className="px-3 py-1 bg-slate-100 border hover:bg-slate-200">
                L
              </button>
              <button className="px-3 py-1 bg-slate-100 border hover:bg-slate-200">
                XL
              </button>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-red-500 text-white px-8 py-3 text-[10px] font-semibold uppercase hover:bg-red-600 active:scale-95" onClick={()=>{addToCart(product.id)}}>
              Add Cart
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex w-[75%] mx-auto mt-20">
        <button className="text-black border-black border-2 bg-slate-100 hover:bg-slate-200 px-8 py-3 text-[10px] font-semibold uppercase">
          Description
        </button>
        <button className="text-black border-black border-2 bg-slate-100 hover:bg-slate-200 px-8 py-3 text-[10px] font-semibold uppercase">
          Reviews (122)
        </button>
      </div>
      <div className="w-[75%] mx-auto text-[10px] mt-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum optio perferendis odio obcaecati atque, beatae nesciunt, qui quis excepturi iusto soluta culpa eius consequuntur aspernatur eum ipsum reprehenderit blanditiis!</p>
      </div>
    </div>
  );
};
