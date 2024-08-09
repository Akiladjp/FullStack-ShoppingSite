import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { RxCross2 } from "react-icons/rx";

export const Cartitems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-6">
      {/* Cart Header */}
      <div className="grid grid-cols-6 text-center font-semibold uppercase bg-gray-100 p-4 rounded-md mb-6">
        <p className="col-span-2">Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div
                key={e.id}
                className="grid grid-cols-6 items-center bg-white p-4 rounded-md shadow-md"
              >
                <div className="col-span-2 flex items-center">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-24 h-28 object-cover rounded-md mr-4"
                  />
                  <p className="text-sm">{e.name}</p>
                </div>
                <p className="text-center">${e.new_price.toFixed(2)}</p>
                <div className="text-center ">
                  <button className="px-3 py-1 border rounded-md bg-gray-100">
                    {cartItems[e.id]}
                  </button>
                </div>
                <p className="text-center ">${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <div className="text-center flex justify-center">
                  <RxCross2
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Totals */}
      <div className="mt-12 bg-gray-50 p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Cart Totals</h1>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Subtotal</p>
          <p className="font-semibold">${getTotalCartAmount()}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Shipping fee</p>
          <p className="font-semibold">Free</p>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold">
          <p>Total</p>
          <p>${getTotalCartAmount()}</p>
        </div>
      </div>
    </div>
  );
};
