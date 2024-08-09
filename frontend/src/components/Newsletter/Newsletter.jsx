import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-20 bg-slate-300 mb-4">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl">Get Exclusive Offers On Your Email</h1>
        <p className="text-[12px] mt-2">
          Join our mailing list to stay informed with the latest news and
          updates
        </p>
        <div className="mt-8 flex">
          <input
            type="text"
            id="news_letter"
            className="border-2 rounded-l-xl outline-none pl-2 text-[12px] w-[220px] py-1"
          />
          <div className="rounded-r-lg bg-red-600 px-2 hover:bg-red-800">
            <input
              type="submit"
              value="Subscribe"
              className="text-[12px] text-white m-auto font-bold w-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
