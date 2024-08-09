import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrum/Breadcrum";
import { Productdisplay } from "../components/Productdisplay/Productdisplay";
import { RelatedProducts } from "../components/Relatedproducts/RelatedProducts";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e)=> e.id===Number(productId));

  return (
    <div className="pt-24">
      <Breadcrum product={product} />
      <Productdisplay product={product}/>
      <RelatedProducts/>
    </div>
  );
};
