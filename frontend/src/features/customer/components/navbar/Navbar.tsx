import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavAuthButtons from "./NavAuthButtons";
import NavUserSection from "./NavUserSection";
import ThemeSwitcher from "../../../../components/ThemeSwitcher";
import AuthDrawer from "../auth/AuthDrawer";

const Navbar: React.FC = () => {
  const [authDraw, setAuthDraw] = useState(false);
  const [authScreen, setAuthScreen] = useState("Login")

  const toggleAuthDrawer = () => {
    setAuthDraw(!authDraw);
  };

  let user: boolean = false;

  const dummyUser = {
    name: "Clara lagoooosssssssss",
    image: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <>
      <nav className="px-4 md:px-10 lg:px-36 py-4 flex justify-between items-center">
        <NavLogo />
        <NavLinks />

        {user ? (
          <div className="flex gap-2">
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
            <NavUserSection user={dummyUser} />
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>
            <NavAuthButtons toggleAuthDrawer={toggleAuthDrawer} setAuthScreen={setAuthScreen} />
          </div>
        )}
      </nav>
      
      {/* Auth - Drawer (Login, Signup, Otp) */}
      <AuthDrawer authDraw={authDraw} toggleAuthDrawer={toggleAuthDrawer} authScreen={authScreen} setAuthScreen={setAuthScreen} />
    </>
  );
};

export default Navbar;
