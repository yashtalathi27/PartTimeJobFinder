import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Initial_Page

const Navbar = () => {

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">PartTime Pal</div>
          <div className="space-x-4">
            <button className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded">
              Find Jobs
            </button>
            <button className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded">
              Post a Job
            </button>
            <button className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
