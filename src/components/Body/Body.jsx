import React from "react";
import BodyImage from "../../assets/images/btbt1.png";

const body = () => {
  return (
    <>
      <div className="bg-primary-300">
      <div className='mx-[12%] h-[90vh] flex justify-between items-center relative'>
        <div className="font-Poppins">
          <h1 className="font-bold text-5xl mb-1">Text text</h1>
          <h1 className="font-bold text-primary-100 text-5xl mb-1">
            Text text
          </h1>
          <p className="text-lg mb-5">
            Save up to 40% off on your first purchase!
          </p>
          <button className="bg-white rounded-xl p-3 text-base font-bold">
            About Us
          </button>
        </div>

        <div>
          <div className="">
            <img className="h-[592.12px] rotate-[13.96deg] absolute top-[100px] right-[-60px]" src={BodyImage} />
          </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default body;
