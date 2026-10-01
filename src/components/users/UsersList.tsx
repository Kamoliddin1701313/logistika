"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiChevronDown,
  FiEye,
  FiMoreHorizontal,
  FiSearch,
} from "react-icons/fi";

interface UsersType {
  first_name: string;
  id: number;
  last_name: string;
  must_change_password: boolean;
  phone_number: number;
  role: string;
  status: string;
  username: string;
}

function UsersList({ userList }: { userList: UsersType[] }) {
  const [show, setShow] = useState<number | null>(null);
  const [role, setRole] = useState<boolean>(false);
  const [branch, setBranch] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  const showBtn = (id: number) => {
    setShow(id);
  };

  const showRole = () => {
    setRole(!role);
  };

  const showBranch = () => {
    setBranch(!branch);
  };

  const showStatus = () => {
    setStatus(!status);
  };

  return (
    <>
      {/* Filtrlash paneli */}
      <div className="flex flex-wrap items-center gap-5 mb-6">
        {/* Search Users Input */}
        <div className="relative w-1/4 h-[36px]">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-9 pr-3 h-full border border-gray-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
          />
        </div>

        {/* Role Filter */}
        <div className="relative">
          <button
            onClick={showRole}
            className="flex cursor-pointer h-[36px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
          >
            <span>Role Filter</span> <FiChevronDown className="text-gray-400" />
          </button>

          {role && (
            <div className="abs absolute left-0 top-11 w-full">
              <button className="flex cursor-pointer w-full mb-1 h-[30px] text-[12px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800">
                <span>Branch</span>
              </button>
              <button className="flex cursor-pointer w-full mb-1 h-[30px] text-[12px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800">
                <span>Branch</span>
              </button>
            </div>
          )}
        </div>

        {/* Branch Filter */}
        <div className="relative">
          <button
            onClick={showBranch}
            className="flex cursor-pointer h-[36px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
          >
            <span>Branch</span> <FiChevronDown className="text-gray-400" />
          </button>

          {branch && (
            <div className="abs absolute left-0 top-11 w-full">
              <button className="flex cursor-pointer w-full mb-1 h-[30px] text-[12px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800">
                <span>Branch</span>
              </button>
              <button className="flex cursor-pointer w-full mb-1 h-[30px] text-[12px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800">
                <span>Branch</span>
              </button>
            </div>
          )}
        </div>

        {/* Status Filter */}
        <div className="relative">
          <button
            onClick={showStatus}
            className="flex cursor-pointer h-[36px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
          >
            <span>Status</span> <FiChevronDown className="text-gray-400" />
          </button>

          {status && (
            <div className="abs absolute left-0 top-11 w-full">
              <button className="flex cursor-pointer w-full mb-1 h-[30px] text-[12px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800">
                <span>Branch</span>
              </button>
              <button className="flex cursor-pointer w-full mb-1 h-[30px] text-[12px] px-3 font-semibold bg-white items-center gap-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800">
                <span>Branch</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid-based Ro'yxat (DIV lar orqali, Table-Siz) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50/70 py-3.5 px-6 text-sm font-bold text-gray-800">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Full Name</div>
          <div className="col-span-2">Username</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right pr-2">Actions</div>
        </div>

        {/* Grid Body (Jadval Qatorlari) */}
        <div className="divide-y divide-gray-100 text-sm font-medium">
          {userList.length > 0 ? (
            userList.map((user) => {
              const fullName =
                `${user?.first_name || ""} ${user?.last_name || ""}`.trim() ||
                "N/A";
              const isActive =
                user?.status?.toLowerCase() === "active" ||
                user?.status === "ACTIVE";

              return (
                <div
                  key={user?.id}
                  className="grid grid-cols-12 gap-4 items-center py-2.5 px-6 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="col-span-1 text-gray-500 font-normal">
                    {user?.id}
                  </div>

                  <div className="col-span-3 font-semibold text-gray-900">
                    {fullName}
                  </div>

                  <div className="col-span-2 text-gray-500 font-normal">
                    {user?.username}
                  </div>

                  <div className="col-span-2 text-gray-700">{user?.role}</div>

                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center px-5 py-2.5 rounded-full font-sans ${
                        isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user?.status.slice(0, 1) +
                        user?.status.slice(1).toLocaleLowerCase() || "Active"}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-end gap-2 pr-2 relative">
                    <Link
                      href={"/"}
                      className="p-1.5 border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      <FiEye className="text-base" />
                    </Link>

                    {show == user?.id && (
                      <div className="absolute top-1/2 -translate-y-1/2 -left-12">
                        <Link
                          className="bg-gray-600 py-1 px-3.5 text-[12px] text-white rounded-[10px] inline-block mr-2"
                          href={`users/${user?.id}`}
                        >
                          Edite
                        </Link>
                        <Link
                          className="bg-gray-600 py-1 px-3.5 text-[12px] text-white rounded-[10px] inline-block"
                          href={`users/${user?.id}`}
                        >
                          Delete
                        </Link>
                      </div>
                    )}

                    <button
                      onClick={() => showBtn(user.id)}
                      className="p-1.5 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <FiMoreHorizontal className="text-base" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-gray-500 font-normal">
              Foydalanuvchilar topilmadi yoki ma'lumot kelmadi.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UsersList;
