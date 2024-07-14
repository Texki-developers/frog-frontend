import { RiHome5Line } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { MdOutlineGroup } from "react-icons/md";

export const navData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <RiHome5Line className="text-[1.2rem]" />,
  },
  {
    title: "Leaderboard",
    path: "/dashboard",
    icon: <GoTrophy className="text-[1.2rem]" />,
  },
  {
    title: "Friends",
    path: "/dashboard",
    icon: <MdOutlineGroup className="text-[1.2rem]" />,
  },
];
