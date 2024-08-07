import React from "react";
import hero_image from "../../assets/Frontend_Assets/hero_image.png";
import { Button } from "../Shared/Button";

export const Hero = () => {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex flex-col justify-center ml-20 w-[30%] text-left uppercase">
        <h2 className="text-2xl font-semibold">new arrivals only 🥳</h2>
        <div className=" font-bold text-[52px] mt-4">
          <div className="flex gap-2">
            <p>new</p>
            <p>collections</p>
          </div>
          <p>for everyone</p>
        </div>
        <div className="mt-8">
          <Button title='Latest Collection' />
        </div>
      </div>
      <div className="">
        <img src={hero_image} alt="hero image" className="w-[40rem]" />
      </div>
    </div>
  );
};
