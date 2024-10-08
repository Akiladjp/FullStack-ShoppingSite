import React from 'react'
import data_product from "../../assets/Frontend_Assets/data";
import { Item } from "../Item/Item";

export const RelatedProducts = () => {
  return (
    <div className="my-20 mt-32 border-t-2 border-black">
      <div className="mt-12">
        <h1 className="flex justify-center uppercase font-bold text-3xl font-outfit">
          Related Items
        </h1>
        <div className="w-full flex justify-center">
          <div className="mt-12 flex justify-between">
            {data_product.map((item, index) => {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
