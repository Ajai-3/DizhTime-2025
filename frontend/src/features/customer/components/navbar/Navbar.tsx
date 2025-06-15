import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavAuthButtons from "./NavAuthButtons";
import NavUserSection from "./NavUserSection";
import ThemeSwitcher from "../../../../components/ThemeSwitcher";

const Navbar: React.FC = () => {
  let user: boolean = true;

  const dummyUser = {
    name: "Clara lagoooosssssssss",
    image: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="px-4 md:px-10 lg:px-36 py-4 flex justify-between items-center">
      <NavLogo />
      <NavLinks />

      {user ? (
        <div className="flex gap-2">
          {/* <div className="hidden sm:block">
            <ThemeSwitcher />
          </div> */}
          <NavUserSection user={dummyUser} />
        </div>
      ) : (
        <div className="flex gap-2">
          {/* <div className="hidden sm:block">
            <ThemeSwitcher />
          </div> */}
          <NavAuthButtons />
        </div>
      )}
    </div>
  );
};

export default Navbar;
