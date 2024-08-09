import React, { useContext } from "react";
import { IoMdArrowDropright } from "react-icons/io";

export const Breadcrum = (props) => {
  const {product} = props;

  return (
    <div className="flex">
      Home <IoMdArrowDropright className="mt-1"/> Shop <IoMdArrowDropright className="mt-1"/> {product.category}{" "}
      <IoMdArrowDropright className="mt-1" /> {product.name};
    </div>
  );
};
 