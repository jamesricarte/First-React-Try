import React from "react";
import BodyImage from "../../assets/images/btbt1.png";

const body = () => {
  return (
    <>
      <div className="bg-primary-500 h-screen flex justify-between items-center relative">
        <div className="font-Poppins ml-[18vw]">
          <h1 className="font-bold text-5xl mb-1">Text text</h1>
          <h1 className="font-bold text-primary-100 text-5xl mb-1">
            Text text
          </h1>
          <p className="text-lg mb-5">
            Save up to 40% off on your first purchase!
          </p>
          <button className="bg-white rounded-md p-3 text-base font-bold">
            About Us
          </button>
        </div>
        <div>
          <div className="mr-[12vw]">
            <img className="h-[592.12px] rotate-[13.96deg]" src={BodyImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default body;
