"use client";
import { PiTruckTrailerLight } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";
interface User {
  username: string;
  password: string;
}

function Login() {
  const [openeye, setOpeneye] = useState<boolean>(false);

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("", user);
    console.log(response);
  };
  return (
    <div className="w-full h-screen bg-cover bg-center flex bg-[url('/images/logistik.jpg')]">
      <div className="w-full lg:w-[75%] h-full flex flex-col justify-center items-center p-6 bg-gradient-to-l from-white/90 via-white/75 to-transparent">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center">
          <PiTruckTrailerLight className="text-6xl text-blue-600" />
          <h1 className="text-[32px] font-bold text-gray-800 tracking-wide mb-6">
            LOGISTICS CRM
          </h1>

          {/* Form qismi */}
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                name="username"
                onChange={handleChange}
                type="text"
                placeholder="Username"
                className="w-full px-4 h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  onChange={handleChange}
                  type={openeye ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setOpeneye(!openeye)}
                  className="absolute right-3 top-[35%] cursor-pointer text-blue-600 text-lg"
                >
                  {openeye ? <IoMdEyeOff /> : <IoEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded text-blue-600 mt-1 w-[16px] h-[16px]"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold rounded-lg transition-colors shadow-md mt-2"
            >
              Login
            </button>
          </form>

          <Link
            href="/change_password"
            className="block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors mt-1.5 text-right"
          >
            Change password?
          </Link>

          <p className="text-xs text-gray-500 mt-6 text-center">
            Log in with the credentials provided by your manager.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
