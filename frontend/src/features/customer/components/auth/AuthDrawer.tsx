import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Auth from "./Auth";

interface Props {
  authDraw: boolean;
  authScreen: string;
  setAuthScreen: (screen: string) => void;
  toggleAuthDrawer: () => void;
}

const AuthDrawer: React.FC<Props> = ({ authDraw, toggleAuthDrawer, authScreen, setAuthScreen }) => {
  if (!authDraw) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-slate-200/5 z-40"
        onClick={toggleAuthDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[30rem] h-full z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${authDraw ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button - top left */}
        <div className="flex justify-start p-4">
          <button onClick={toggleAuthDrawer}>
            <CloseOutlinedIcon fontSize="large" />
          </button>
        </div>

        {/* Centered Auth Content */}
        <div className="h-[calc(100%-4rem)] px-4 sm:px-6 md:px-8 flex items-center sm:items-start">
          <Auth authScreen={authScreen} setAuthScreen={setAuthScreen} />
        </div>
      </div>
    </>
  );
};

export default AuthDrawer;
