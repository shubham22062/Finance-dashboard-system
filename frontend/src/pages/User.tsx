import Navbar from "../components/navbar"
import SideBar from "../components/sidebar"
import { useState } from "react"
import axios from "axios";
import type { ChangeEvent, FormEvent } from "react";

type Role = "admin"|"analyst"|"viewer";


interface SignUpData{
    name:string;
    email:string;
    password:string;
    role:Role|""
}



export default function User(){

    const [isOpen, setIsOpen] = useState(false);

    const [data , setData] = useState<SignUpData>({
        name:"",
        email:"",
        password:"",
        role:""
    });
    
    //handle text inputs
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    
    const handleRoleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            role:e.target.value as Role
        })
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!data.role){
        alert("please Select the role")
        return
    }
    try {
        const res = await axios.post(
            "http://localhost:4000/api/auth/register",
            data
        );
        console.log(res.data);
        alert("user Registered");
        
        setData({
            name:"",
            email:"",
            password:"",
            role:""
        });

        
    } catch (error:any) {
        console.error(error.response?.data||error.message);
        alert("Registration Failed")
    }
};



    return(
        <div className="min-h-screen">
                <Navbar/>
                <div className=" flex">
                    <SideBar/>
                    <div className="flex-1 p-6">
                        <div className=" flex justify-between">
                        <div>
                        <h1 className="text-2xl font-bold">User Management </h1>
                        <p className="text-gray-400">Manage users, roles, and permissions</p>
                        </div>
                        <div>
                        <button onClick={()=>setIsOpen(true)}
                        className="rounded-md text-white font-bold bg-green-400 border border-green-500 hover:bg-green-600 w-50 p-2"> + Add user</button>
                        </div>
                        </div>


                     <div className="mt-8 flex gap-4 p-2 text-center">
                            <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Total User's</span>
                                <span className="text-blue-500 py-3 block text-4xl font-bold">5</span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Active User</span>
                                <span className="text-green-400 py-3 block text-4xl font-bold">5</span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Admins</span>
                                <span className="text-violet-400 py-3 block text-4xl font-bold">5</span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Analyst's</span>
                                <span className="text-orange-500 py-3 block text-4xl font-bold">5</span>
                        </div>
                    </div>

                    <div className="w-full border-2 border-gray-200 mt-8 p-6 rounded-md">
                        <input
                            type="search"
                            placeholder="search the user by name or email..."
                            className="border-2 border-gray-200 bg-gray-200 w-[90%] p-2 rounded-md"
                        />
                    </div>

                    <div className="mt-5 border-2 w-full border-gray-300 rounded-xl overflow-x-auto">
                        <div className="min-w-[800px] p-4">
                            <div className="grid grid-cols-6 gap-4 p-2 font-bold border-b border-gray-300">
                                <span>User</span>
                                <span>Email</span>
                                <span>Role</span>
                                <span>Status</span>
                                <span>Action</span>
                                
                            </div>
                    </div>
                    </div>

                    </div>
                </div>
     {isOpen && (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60] p-4">
     <form
        onSubmit={handleSubmit}
        className="border rounded-xl border-gray-300 bg-gray-100 p-6 w-96"
      >
        <h1 className="font-bold text-xl text-center mb-2">
          Capital Dash
        </h1>

        <p className="text-gray-500 text-sm mb-4 text-center">
          Create a new Account
        </p>

        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl mb-3 border-gray-300"
          required
        />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl mb-3 border-gray-300"
          required
        />

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl mb-3 border-gray-300"
          required
        />

        {/* Role */}
        <span className="font-bold block mt-2 mb-2">Select Role</span>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={data.role === "admin"}
              onChange={handleRoleChange}
            />
            Admin
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="analyst"
              checked={data.role === "analyst"}
              onChange={handleRoleChange}
            />
            Analyst
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="viewer"
              checked={data.role === "viewer"}
              onChange={handleRoleChange}
            />
            Viewer
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-4 bg-green-400 text-white font-bold rounded-xl py-2 hover:bg-green-500"
        >
          Sign Up
        </button>

        <button
          onClick={()=>setIsOpen(false)}
          className="w-full mt-4 bg-red-400 text-white font-bold rounded-xl py-2 hover:bg-red-500"
        >
          cancle
        </button>
      </form>
    </div>
  )}
  </div>
        
    )
}