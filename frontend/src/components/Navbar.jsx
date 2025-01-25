import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex fixed w-[95%] flex-row justify-between items-center shadow-md bg-white rounded-lg">
      <div className="p-2 pl-5">
        <p className="text-purple-800 text-[20px] font-bold">PartTime-pal</p>
      </div>
      <div className="p-2 flex flex-row gap-25 justify-center ">
        <div className="">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </div>
        <div>
          <Link to="/" className="hover:underline">
            find Jobs
          </Link>
        </div>
        <div>
          <Link to="/" className="hover:underline">
            Employers
          </Link>
        </div>
        <div>
          <Link to="/" className="hover:underline">
            About Us
          </Link>
        </div>
      </div>
      <div className="p-2 flex flex-row gap-3 justify-center">
        <div>
          <Link to="/contact-us">
            <button className="h-10 w-32 border-3 border-purple-400 rounded-md">
              Contact Us
            </button>
          </Link>
          </div>
          <div>
          <Link to="/login">
            <button className="h-10 w-32 bg-purple-600 text-white rounded-md hover:bg-purple-800">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
