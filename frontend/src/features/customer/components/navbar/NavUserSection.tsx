import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface User {
  name: string;
  image: string;
}

interface Props {
  user: User;
}

const NavUserSection: React.FC<Props> = ({ user }) => {

  let num = 7

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <ShoppingCartOutlinedIcon fontSize="large" />
        <div className="absolute -top-2 -right-1 bg-main-color w-5 h-5 rounded-full flex justify-center items-center font-semibold ">{num}</div>
      </div>

      <span className="hidden sm:block w-[1px] h-8 bg-gray-900 dark:bg-white mx-2"></span>

      <img
        src={user?.image}
        alt={user?.name}
        className="w-10 h-10 rounded-full object-cover hover:cursor-pointer"
      />
      <div className="hidden sm:flex flex-col hover:cursor-pointer">
        <span className="text-sm font-medium text-gray-700 truncate w-28">
          Hai {user?.name}
        </span>
        <span className="font-bold tracking-wider text-sm">My Account</span>
      </div>
    </div>
  );
};

export default NavUserSection;
