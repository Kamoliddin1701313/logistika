import Link from "next/link";
import { SiInstructure } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { MdPayments } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { AiOutlinePayCircle } from "react-icons/ai";
import { SiStaffbase } from "react-icons/si";
import { TbUsers } from "react-icons/tb";
import { PiUploadSimple } from "react-icons/pi";
import { VscGitBranchStagedChanges } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";

function Sidebar() {
  const tabs = [
    {
      id: 1,
      icon: <RxDashboard fontSize={16} />,
      name: "dashboard",
      link: "dashboard",
    },
    {
      id: 2,
      icon: <PiUploadSimple fontSize={18} />,
      name: "loads",
      link: "loads",
    },
    {
      id: 3,
      icon: <MdPayments fontSize={18} />,
      name: "payments",
      link: "payments",
    },
    {
      id: 4,
      icon: <SiSololearn fontSize={15} />,
      name: "earnings",
      link: "earnings",
    },
    {
      id: 5,
      icon: <AiOutlinePayCircle fontSize={18} />,
      name: "paycuts",
      link: "paycuts",
    },
    {
      id: 6,
      icon: <SiStaffbase fontSize={16} />,
      name: "staff",
      link: "staff",
    },
    { id: 7, icon: <TbUsers fontSize={18} />, name: "users", link: "users" },
    {
      id: 8,
      icon: <VscGitBranchStagedChanges fontSize={18} />,
      name: "branches",
      link: "branches",
    },
    {
      id: 9,
      icon: <IoNotificationsOutline fontSize={18} />,
      name: "notifications",
      link: "notifications",
    },
  ];

  return (
    <aside className="w-[250px] h-screen bg-slate-900 text-white p-5">
      <Link
        href="/"
        className="w-full flex items-center gap-4 font-semibold mb-4 text-white uppercase"
      >
        <SiInstructure />
        <span>LOGSTICS CRM</span>
      </Link>

      {/* 2. Navigatsiya bloki */}
      <nav aria-label="Asosiy menyu">
        {/* 3. Havolalar ro'yxati */}
        <ul className="space-y-1 w-full">
          {tabs &&
            tabs?.map((value) => (
              <li key={value?.id}>
                <Link
                  href={value?.link}
                  className="flex items-center gap-3 capitalize px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>{value?.icon}</span>
                  <span>{value?.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
