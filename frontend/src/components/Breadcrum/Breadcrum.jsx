import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="flex text-[12px] w-[75%] mx-auto mt-12">
      Home <IoMdArrowDropright className="mt-1" /> Shop{" "}
      <IoMdArrowDropright className="mt-1" /> {product.category}{" "}
      <IoMdArrowDropright className="mt-1" /> {product.name}
    </div>
  );
};
