import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";

export const Productdisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-[75%] mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex">
          <div className="grid grid-cols-2 gap-4">
            <img src={product.image} alt="" className="w-52 object-cover rounded-lg border shadow-md" />
            <img src={product.image} alt="" className="w-52 object-cover rounded-lg border shadow-md" />
            <img src={product.image} alt="" className="w-52 object-cover rounded-lg border shadow-md" />
            <img src={product.image} alt="" className="w-52 object-cover rounded-lg border shadow-md" />
          </div>
        </div>
        
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-sm mt-2">
            Premier quality shoes from quality venders
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="text-gray-600">(122)</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <h1 className="text-2xl font-semibold text-red-600">${product.new_price}</h1>
            <h1 className="text-lg font-light text-gray-500 line-through">${product.old_price}</h1>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-lg">Select Size</h1>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300">S</button>
              <button className="px-4 py-2 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300">L</button>
              <button className="px-4 py-2 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300">XL</button>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-full uppercase text-sm font-semibold hover:bg-red-600 active:scale-95 transition transform duration-100"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-16">
        <button className="px-6 py-2 border-2 border-black text-black text-sm font-semibold uppercase rounded-full bg-gray-100 hover:bg-gray-200 transition duration-150">
          Description
        </button>
        <button className="px-6 py-2 border-2 border-black text-black text-sm font-semibold uppercase rounded-full bg-gray-100 hover:bg-gray-200 transition duration-150">
          Reviews (122)
        </button>
      </div>
      <div className="mt-8 text-sm text-gray-700">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum optio perferendis odio obcaecati atque, beatae nesciunt, qui quis excepturi iusto soluta culpa eius consequuntur aspernatur eum ipsum reprehenderit blanditiis!
        </p>
      </div>
    </div>
  );
};
