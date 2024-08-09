import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrum/Breadcrum";

export const Product = (props) => {
  const { all_product } = useContext(ShopContext);
  const  productId  = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div className="pt-24">
      {/* <Breadcrum product={product} /> */}
      <p>hello</p>
    </div>
  );
};
