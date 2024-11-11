import React, { useState } from "react";
import picture from "../../assets/picture.png";

export const Addproducts = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: null,
    category: "men",
    old_price: "",
    new_price: "",
  });

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setProductDetails({ ...productDetails, image: file });
  };

  const handleChanger = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let formData = new FormData();
    formData.append("image", productDetails.image);
    formData.append("name", productDetails.name);
    formData.append("category", productDetails.category);
    formData.append("old_price", productDetails.old_price);
    formData.append("new_price", productDetails.new_price);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        console.log("Product added successfully:", responseData.product);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="pl-32 pt-2">
      <div className="flex flex-col items-center w-[800px] h-[520px] bg-white shadow-lg rounded-lg p-8">
        <h1 className="my-12 text-[24px] font-bold uppercase text-gray-800">
          Add Product
        </h1>
        <form className="space-y-6">
          <div className="">
            <div className="w-[500px] border-2 border-gray-300 rounded-lg flex items-center px-2 py-1">
              <label htmlFor="productName" className="hidden">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="name"
                value={productDetails.name}
                onChange={handleChanger}
                placeholder="Product Title"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[240px] border-2 border-gray-300 rounded-lg flex items-center px-2 py-1">
              <label htmlFor="newPrice" className="hidden">
                New Price
              </label>
              <input
                type="text"
                id="newPrice"
                name="new_price"
                value={productDetails.new_price}
                onChange={handleChanger}
                placeholder="New Price"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
            <div className="w-[240px] border-2 border-gray-300 rounded-lg flex items-center px-2 py-1">
              <label htmlFor="oldPrice" className="hidden">
                Old Price
              </label>
              <input
                type="text"
                id="oldPrice"
                name="old_price"
                value={productDetails.old_price}
                onChange={handleChanger}
                placeholder="Old Price"
                className="ml-2 w-full outline-none text-gray-700"
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="hidden">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={productDetails.category}
              onChange={handleChanger}
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
              <img
                src={productDetails.image ? URL.createObjectURL(productDetails.image) : picture}
                alt="Product"
                className=""
              />
            </label>
            <input
              type="file"
              id="file-input"
              name="image"
              className="hidden"
              onChange={imageHandler}
            />
          </div>
          <div className="shadow-lg">
            <input
              type="button"
              value="Add Product"
              onClick={Add_Product}
              className="w-[500px] bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
