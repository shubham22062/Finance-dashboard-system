import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const navigate = useNavigate();

    const [open , setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user")||"{}");

    const getIntails  = (name:string)=>{
        if(!name){
            return ""
        }
        return name.split(" ").map((p:string)=>p[0]).join("").toUpperCase();
    }

    const handleLogout = ()=>{
        localStorage.clear();
        navigate("/signin")
    }
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full z-50 h-15 bg-gray-200 p-3 border-b-2 border-gray-100">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg">Capital Dash</div>
        <span className="font-semibold px-13">Welcome back !! {user?.name||"User"}</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>

        {/* User Section */}
        <div className="relative">
        <div onClick={()=>setOpen(!open)}
            className="flex items-center gap-3 ">
          <div className="flex rounded-full h-10 w-10 items-center justify-center bg-green-400 text-white font-bold border border-green-400 text-lg">
            {getIntails(user?.name)}
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 text">{user?.name}</span>
            <span className="text-sm text-gray-400">{user?.email}</span>
          </div>
        </div>
         {open &&(
            <div className="absolute right-0 mt-5 w-40 bg-white border rounded-lg shadow-md">
                <button onClick={handleLogout}
                className="w-full text-left px-4 py-2  hover:bg-gray-100 text-red-500">Logout</button>
            </div>
        )}
        </div>

       

      </div>
    </nav>
  );
}