import React from "react";

const NavLogo: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
        <img src="./favicon.jpg" alt="" className="w-8 object-cover rounded-md" />
        <h1 className="font-bold text-2xl"><span className="text-main-color tracking-widest">DIZH</span><span className="">TIME</span></h1>
    </div>
  );
};

export default NavLogo;
