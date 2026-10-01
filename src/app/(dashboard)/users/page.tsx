import axios from "axios";
import UsersList from "@/components/users/UsersList";
import { BASE_URL } from "@/config/constants";
import { cookies } from "next/headers";
import { FiSearch, FiPlus } from "react-icons/fi";
import Link from "next/link";

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

async function getUsers() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      console.log("Server: Token topilmadi");
      return null;
    }

    const res = await axios.get(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error: any) {
    console.log("Server xatosi:", error?.response?.data || error.message);
    return null;
  }
}

export default async function Users() {
  const usersData = await getUsers();
  const userList: UsersType[] = usersData?.data?.content || [];

  return (
    <div className="w-full p-6 bg-slate-50 min-h-screen font-sans text-gray-800">
      <div className="relative mb-6">
        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search partners..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-800"
        />
      </div>

      {/* Sarlavha va Add User tugmasi */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-normal tracking-tight text-gray-900">
          Users
        </h1>

        <Link
          href="/users/create"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
        >
          <FiPlus className="text-lg" />
          <span>Add User</span>
        </Link>
      </div>

      <UsersList userList={userList} />
    </div>
  );
}
