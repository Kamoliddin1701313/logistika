"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import Link from "next/link";
import { BASE_URL } from "../../../config/constants";

import {
  IoEye,
  IoLockClosed,
  IoCheckmarkCircle,
  IoArrowBack,
} from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  current_password: string;
  new_password: string;
}

function Change_password() {
  // Ko'z tugmalari (show/hide password) holatlari
  const [showCurrent, setShowCurrent] = useState<boolean>(false);
  const [showNew, setShowNew] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const router = useRouter();

  const [change_parol, setChange_parol] = useState<User>({
    current_password: "",
    new_password: "",
  });

  const changeParol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange_parol((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const respons = await axios.patch(
        `${BASE_URL}/auth/change-password`,
        change_parol,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (respons?.data?.success) {
        router.push("/");
      }
      console.log(respons, "Salom xammaga patch qilinayabdimi endi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-[45%] p-6 max-lg:w-[55%] max-md:w-[70%] max-sm:w-[90%] bg-white rounded-2xl shadow-xl flex flex-col items-center">
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-md">
          <IoLockClosed />
        </div>

        <h2 className="text-xl font-bold text-gray-900 text-center mb-1">
          Change Your Password
        </h2>

        <p className="text-xs text-gray-500 text-center mb-4 leading-relaxed max-w-xs">
          You are using a temporary password. Please create a new password to
          continue.
        </p>

        {/* Forma qismi */}
        <form onSubmit={changeHandle} className="w-full flex flex-col gap-3">
          {/* 1. Current Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Current Password
            </label>
            <div className="relative">
              <input
                name="current_password"
                onChange={changeParol}
                type={showCurrent ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full px-3.5 h-[46px] text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10 text-gray-800 bg-gray-50/50"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 cursor-pointer text-lg"
              >
                {showCurrent ? <IoMdEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          {/* 2. New Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              New Password
            </label>
            <div className="relative">
              <input
                name="new_password"
                onChange={changeParol}
                type={showNew ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full px-3.5 h-[46px] text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10 text-gray-800 bg-gray-50/50"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 cursor-pointer text-lg"
              >
                {showNew ? <IoMdEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          {/* Parol mustahkamligi indikatori (Progress bar & Checklist) */}
          <div className="space-y-2 py-1">
            {/* Yashil progress liniyasi */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-emerald-600 rounded-full transition-all duration-300"></div>
            </div>

            {/* Talablar ro'yxati */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <IoCheckmarkCircle className="text-sm shrink-0" />
                <span>At least 8 characters</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <IoCheckmarkCircle className="text-sm shrink-0" />
                <span>Contains letters and numbers</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <IoCheckmarkCircle className="text-sm shrink-0" />
                <span>Contains a special character</span>
              </div>
            </div>
          </div>

          {/* Submit tugmasi */}
          <button
            type="submit"
            className="w-full h-[46px] bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-[0.99] cursor-pointer"
          >
            Change Password
          </button>
        </form>

        {/* ✅ Login sahifasiga qaytish tugmasi */}
        <div className="mt-2 pt-2 border-t border-gray-100 w-full text-center">
          <Link
            href="/login"
            className="inline-flex items-center h-[46px] w-full justify-center gap-2 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors py-1 px-3 rounded-lg hover:bg-blue-50"
          >
            <IoArrowBack className="text-sm" />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Change_password;
