import { FaCartPlus } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {IoIosPaper } from "react-icons/io";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";

export const sidebarData = [
  {
    title: "Login",
    path: "/account/login",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownFill />,
    iconOpened: <RiArrowUpFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/user",
        icon: <IoIosPaper/>,
      },
      {
        title: "Revnue",
        path: "/overview/revnue",
        icon: <IoIosPaper/>,
      },
    ],
  },
  {
    title: "Rigister",
    path: "/account/register",
    icon: <AiFillHome />,
    iconClosed: <RiArrowDownFill />,
    iconOpened: <RiArrowUpFill />,
    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIosPaper/>,
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIosPaper/>,
      },
      {
        title: "Reports 3",
        path: "/reports/reports 3",
        icon: <IoIosPaper/>,
      },
    ],
  },
  {
      title: 'Contact',
      path: '/contactUs',
      icon: <FaCartPlus />
  }
];
