"use client";

import { FiChevronDown, FiX } from "react-icons/fi";

function CreateUser() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-2xl border border-gray-100 shadow-xl p-6 font-sans text-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Create New User</h2>
          <button className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer">
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="Bekzod"
                required
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Oripov"
                required
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Row 2: Username & Phone Number */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="bekzod"
                required
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone_number"
                placeholder="+998 90 123 45 67"
                required
                className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Row 3: Role & Branch */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Role <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="role"
                  className="w-full appearance-none px-3.5 py-2 pr-8 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer"
                >
                  <option value="CEO">CEO</option>
                  <option value="Manager">Manager</option>
                  <option value="Staff">Staff</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Branch <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="branch"
                  className="w-full appearance-none px-3.5 py-2 pr-8 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer"
                >
                  <option value="Tashkent">Tashkent</option>
                  <option value="Samarkand">Samarkand</option>
                  <option value="Bukhara">Bukhara</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Require Password Change Switch Toggle */}
          <div className="py-2">
            <label className="inline-flex items-center gap-3 cursor-pointer">
              <div className="relative inline-flex items-center">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
              <span className="text-xs font-medium text-gray-700">
                Require password change on first login
              </span>
            </label>
          </div>

          {/* Row 4: Status */}
          <div className="w-1/2 pr-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Status
            </label>
            <div className="relative">
              <select
                name="status"
                className="w-full appearance-none px-3.5 py-2 pr-8 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 cursor-pointer"
              >
                <option value="Active">Active</option>
                <option value="Blocked">Blocked</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 mt-6 border-t border-gray-100">
            <button
              type="button"
              className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
