import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { MdArrowDropDown } from "react-icons/md";
import { Item } from "../components/Item/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <div className="">
        <img
          src={props.banner}
          alt="banner"
          className="block pt-24 w-[64%] mx-auto"
        />
        <div className="flex justify-between mt-8 w-[64%] mx-auto py-2">
          <div className="font-semibold">
            <p className="">
              <span className="">Showing 1-12</span> Out of 36 products
            </p>
          </div>
          <div className="flex font-semibold rounded-2xl border-2 px-2 py-1">
            Sort by <MdArrowDropDown className="mt-1 ml-1" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="mt-20 grid grid-cols-4 gap-4">
            {all_product.map((data, index) => {
              if (props.category === data.category) {
                return (
                  <Item
                    key={index}
                    image={data.image}
                    name={data.name}
                    new_price={data.new_price}
                    old_price={data.old_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-[64%] mx-auto flex justify-center mt-8 mb-16">
        <div className="flex justify-center text-[12px] rounded-2xl bg-slate-200 w-28 border-2 px-1 py-1 active:scale-95 hover:bg-slate-300">
          Load More
        </div>
      </div>
    </div>
  );
};
