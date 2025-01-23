import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/google-icon (2).svg";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setPassword("");
    setUsername("");
    console.log("submit");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-2 font-poppins">
          Login to your Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Select the below login methods.
        </p>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email ID / Username
            </label>
            <input
              value={username}
              type="email"
              id="email"
              placeholder="Enter email id / username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                type={show ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 text-gray-500 text-sm cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "show"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-500">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-purple-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
          >
            Login
          </button>
        </form>
        <div className="my-6 text-center text-gray-500">or login with</div>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <img src={googleIcon} alt="Google" className="h-5" />
          </button>
        </div>
        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#2D31AB] font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
