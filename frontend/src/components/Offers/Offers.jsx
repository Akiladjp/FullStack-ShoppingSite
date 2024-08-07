import React from "react";
import { Button } from "../Shared/Button";
import exclusive_image from "../../assets/Frontend_Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="flex justify-center my-48 shadow-md pb-8">
      <div className="flex gap-40">
        <div>
          <img src={exclusive_image} alt="" className="w-[20rem]" />
        </div>
        <div className="flex flex-col my-auto gap-y-2 font-bold">
          <h1 className="text-[48px]">Exclusive</h1>
          <h1 className="text-[32px]">Offers For You</h1>
          <p className="text-[12px]">Only on best sellers products</p>
          <Button title="Check Now" />
        </div>
      </div>
    </div>
  );
};
