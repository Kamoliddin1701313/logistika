"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

import { PiTruckTrailerLight } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "../../../config/constants";

interface User {
  username: string;
  password: string;
}

function Login() {
  const [openeye, setOpeneye] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasToken, setHasToken] = useState<boolean>(false);
  const router = useRouter();

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setHasToken(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, user);
      const token = response?.data?.data?.access_token;

      if (response?.data?.success && token) {
        //localStorage.setItem("token", token);
        Cookies.set("token", token, { expires: 7, path: "/" });

        toast.success("Tizimga muvaffaqiyatli kirdingiz!", {
          position: "top-right",
          autoClose: 1500,
        });

        setTimeout(() => {
          router.replace("/");
        }, 1600);
        
      } else {
        toast.error("Tizimga kirishda xatolik yuz berdi!");
      }
    } catch (error: any) {
      console.error("Login xatosi:", error);

      const errorMessage =
        error.response?.data?.message || "Username yoki parol xato!";

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full h-screen bg-cover bg-center flex bg-[url('/images/logistik.jpg')]">
      {/* Toast'lar ekranda ko'rinishi uchun konteyner */}
      <ToastContainer />

      <div className="w-full lg:w-[75%] h-full flex flex-col justify-center items-center p-6 bg-gradient-to-l from-white/90 via-white/75 to-transparent">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center">
          <PiTruckTrailerLight className="text-6xl text-blue-600" />
          <h1 className="text-[32px] font-bold text-gray-800 tracking-wide mb-6">
            LOGISTICS CRM
          </h1>

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
                value={user.username}
                onChange={handleChange}
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  type={openeye ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
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
              disabled={loading}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 cursor-pointer text-white font-semibold rounded-lg transition-colors shadow-md mt-2"
            >
              {loading ? "Kirilmoqda..." : "Login"}
            </button>
          </form>

          {hasToken && (
            <Link
              href="/change_password"
              className="block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors mt-1.5 text-right"
            >
              Change password?
            </Link>
          )}

          <p className="text-xs text-gray-500 mt-6 text-center">
            Log in with the credentials provided by your manager.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
