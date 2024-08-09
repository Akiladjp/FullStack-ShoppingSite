import React from 'react'
import new_collection from '../../assets/Frontend_Assets/new_collections'
import { Item } from '../Item/Item'

export const Newcollection = () => {
  return (
    <div className="my-20">
      <div className="">
        <h1 className="flex justify-center uppercase font-bold text-3xl font-outfit">
          new collection
        </h1>
        <div className="w-full flex justify-center">
          <div className="mt-20 grid grid-cols-4 gap-4">
            {new_collection.map((item, index) => {
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
