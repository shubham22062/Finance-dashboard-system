import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { dark, setDark } = useTheme();

  const [open, setOpen] = useState(false);

  const getInitials = (name?: string) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((p) => p[0])
      .join("")
      .toUpperCase();
  };

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav className="flex justify-between items-center h-15 
      bg-white dark:bg-black
      p-3 border-b-2 border-gray-100 dark:border-gray-700">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg text-black dark:text-white">
          Capital Dash
        </div>

        <span className="font-semibold text-black dark:text-gray-200 px-50">
          Welcome back !! {user?.name || "User"}
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">

        {/* THEME TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="cursor-pointer text-black dark:text-white"
        >
          {dark ? (
            // 🌙 Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            // ☀️ Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm7.5-3.75a.75.75 0 0 1 .75.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75-.75ZM4.5 12a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1 0-1.5H3.75A.75.75 0 0 1 4.5 12Zm12.03-6.03a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM5.41 17.53a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06Zm12.12 1.06a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1 0 1.06ZM6.47 5.41a.75.75 0 0 1 0 1.06L5.41 7.53A.75.75 0 0 1 4.35 6.47l1.06-1.06a.75.75 0 0 1 1.06 0Z" />
            </svg>
          )}
        </button>

        {/* USER DROPDOWN */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="flex rounded-full h-10 w-10 items-center justify-center bg-green-400 text-white font-bold border border-green-400 text-lg">
              {getInitials(user?.name)}
            </div>

            <div className="flex flex-col">
              <span className="text-gray-700 dark:text-gray-200">
                {user?.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </span>
            </div>
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-40 
              bg-white dark:bg-gray-700 
              border dark:border-gray-600 
              rounded-lg shadow-md">

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 
                  hover:bg-gray-100 dark:hover:bg-gray-600 
                  text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}