import React, { useState } from "react";
import { IoIosImages } from "react-icons/io";
import picture from '../../assets/picture.png'

export const Addproducts = () => {

    const [image, setImage] = useState(false);

    const imageHandler = (e)=> {
        setImage(e.target.files[0]);
    } 

  return (
    <div className="pl-32 pt-2">
      <div className="flex flex-col items-center w-[800px] h-[520px] bg-white shadow-lg rounded-lg p-8">
        <h1 className="my-12 text-[24px] font-bold uppercase text-gray-800">
          Add Product
        </h1>
        <form action="" className="space-y-6">
          <div className="">
            <div className="w-[500px] border-2 border-gray-300 rounded-lg flex items-center px-2 py-1">
              <input
                type="text"
                name="productname"
                placeholder="Product Title"
                id=""
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[240px] border-2 border-gray-300 rounded-lg flex items-center px-2 py-1">
              <input
                type="text"
                placeholder="New Price"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
            <div className="w-[240px] border-2 border-gray-300 rounded-lg flex items-center px-2 py-1">
              <input
                type="text"
                placeholder="Old Price"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
          </div>
          <div>
            <select
              name="category"
              id=""
              className="w-[500px] border-2 border-gray-300 rounded-lg px-2 py-1 text-gray-700"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kid</option>
              <option value="sport">Sport</option>
            </select>
          </div>
          <div className="flex items-center justify-center w-[500px] h-20 border-2 rounded-lg mx-auto">
            <label
              htmlFor="file-input"
              className="flex items-center justify-center w-10 h-10 text-black"
            >
              <img src={image? URL.createObjectURL(image) : picture} alt="" className=""/>
            </label>
            <input type="file" id="file-input" className="hidden" onChange={imageHandler} />
          </div>
          <div className="shadow-lg">
            <input
              type="submit"
              value="Add Product"
              className="w-[500px] bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
