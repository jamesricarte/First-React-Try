import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[198px] bg-primary-100 flex justify-between items-center">
        <div className="font-Poppins ml-[26vh]">
          <h1 className="font-bold text-black text-[40px] mb-0.5">
            Sign Up For Newsletter
          </h1>
          <h3 className="font-bold text-primary-500 text-base">
            Get E-mail updates about our latest shop and special orders
          </h3>
        </div>
        <div className="mr-[26vh]">
          <form action="">
            <input
              className="p-3 rounded-l-lg w-[374px] font-bold placeholder-gray-300"
              type="text"
              placeholder="Your email address"
            />
            <button className="bg-primary-500 text-white text-base rounded-r-xl py-3 px-5 font-bold">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
