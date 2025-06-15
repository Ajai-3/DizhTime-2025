import React from "react";

interface Props {
  authScreen: string;
  setAuthScreen: (screen: string) => void;
}

const Auth: React.FC<Props> = ({ authScreen, setAuthScreen }) => {
  const isLogin = authScreen === "Login";

  return (
    <div className="py-2 px-2">
      <h1 className="text-2xl font-bold mb-2">{authScreen}</h1>

      <p className="text-md text-gray-400 mb-6">
        {isLogin ? (
          <>
            New to <span className="text-main-color font-medium">Dizh</span>
            <span className="font-medium">Time</span>?{" "}
            <button
              onClick={() => setAuthScreen("Sign up")}
              className="text-main-color font-medium"
            >
              Create an account
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setAuthScreen("Login")}
              className="text-main-color font-medium"
            >
              Log in here
            </button>
          </>
        )}
      </p>

      {!isLogin && (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent outline-none focus:border-main-color focus:ring-1 focus:ring-main-color mb-4"
          />

          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent outline-none focus:border-main-color focus:ring-1 focus:ring-main-color mb-4"
          />
        </>
      )}

      <input
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="Enter phone number"
        className="w-full p-2 border border-gray-300 rounded-md bg-transparent outline-none focus:border-main-color focus:ring-1 focus:ring-main-color"
      />

      {!isLogin && (
        <div className="flex items-start gap-2 text-sm text-gray-600 mt-3">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 accent-main-color"
          />
          <label htmlFor="terms" className="leading-snug">
            By signing up, you agree to{" "}
            <span className="text-main-color font-medium cursor-pointer">
              DIZH<span className="text-gray-900 dark:text-white">TIME's</span> Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-main-color font-medium cursor-pointer">
              Privacy Policy
            </span>
            .
          </label>
        </div>
      )}

      <button className="bg-main-color w-full p-2 rounded-md mt-6 font-medium">
        Get One-Time Password
      </button>
    </div>
  );
};

export default Auth;
