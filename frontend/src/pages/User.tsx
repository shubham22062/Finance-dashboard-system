import Navbar from "../components/navbar"
import SideBar from "../components/sidebar"
import { useEffect, useState } from "react"
import axios from "axios";
import type { ChangeEvent, FormEvent } from "react";

type Role = "admin"|"analyst"|"viewer";

interface SignUpData{
    name:string;
    email:string;
    password:string;
    role:Role|""
}

interface UserTypes{
    _id:string;
    name:string;
    email:string;
    role:string;
    isActive:boolean;
}

export default function User(){

    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState<UserTypes[]>([]);

    const [data , setData] = useState<SignUpData>({
        name:"",
        email:"",
        password:"",
        role:""
    });
    
    // handle input
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

    // fetch users
    const fetchUsers = async() =>{
        try {
            const res = await axios.get("http://localhost:4000/api/auth/users");
            setUsers(res.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchUsers();   // ✅ FIXED
    },[])

    // register user
    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!data.role){
            alert("please Select the role")
            return
        }

        try {
            await axios.post(
                "http://localhost:4000/api/auth/register",
                data
            );

            // ✅ always sync with backend
            await fetchUsers();

            setIsOpen(false);

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

    // delete user
    const handleDelete = async(id:string)=>{
        console.log("Deleting id:", id)
        try {
            await axios.delete(`http://localhost:4000/api/auth/${id}`);

            // update UI
            setUsers((prev)=> prev.filter((u)=>u._id !== id));
        } catch (error) {
            console.error(error)
        }
    }

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
                            className="rounded-md text-white font-bold bg-green-400 border border-green-500 hover:bg-green-600 w-50 p-2">
                                + Add user
                            </button>
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="mt-8 flex gap-4 p-2 text-center">

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                            <span className="text-gray-400 ">Total User's</span>
                            <span className="text-blue-500 py-3 block text-4xl font-bold">
                                {users.length}
                            </span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                            <span className="text-gray-400 ">Active User</span>
                            <span className="text-green-400 py-3 block text-4xl font-bold">
                                {users.filter(u=>u.isActive).length}
                            </span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                            <span className="text-gray-400 ">Admins</span>
                            <span className="text-violet-400 py-3 block text-4xl font-bold">
                                {users.filter(u=>u.role==="admin").length}
                            </span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                            <span className="text-gray-400 ">Analyst's</span>
                            <span className="text-orange-500 py-3 block text-4xl font-bold">
                                {users.filter(u=>u.role==="analyst").length}
                            </span>
                        </div>
                    </div>

                    {/* SEARCH */}
                    <div className="w-full border-2 border-gray-200 mt-8 p-6 rounded-md">
                        <input
                            type="search"
                            placeholder="search the user by name or email..."
                            className="border-2 border-gray-200 bg-gray-200 w-[90%] p-2 rounded-md"
                        />
                    </div>

                    {/* TABLE */}
                    <div className="mt-5 border-2 w-full border-gray-300 rounded-xl overflow-x-auto">
                        <div className="min-w-[800px] p-4">

                            <div className="grid grid-cols-5 gap-4 p-2 font-bold border-b border-gray-300">
                                <span>User</span>
                                <span>Email</span>
                                <span>Role</span>
                                <span>Status</span>
                                <span>Action</span>
                            </div>

                            {users.map((user)=>(
                                <div key={user._id} className="grid grid-cols-5 gap-4 p-2 border-b border-gray-200">
                                    <span>{user.name}</span>
                                    <span>{user.email}</span>
                                    <span>{user.role}</span>
                                    <span className={user.isActive ? "text-green-500" : "text-red-500"}>
                                        {user.isActive ? "Active" : "Inactive"}
                                    </span>

                                    <span>
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={() => handleDelete(user._id)} 
                                                className="text-red-500 hover:bg-red-50 p-1 rounded"
                                            >
                                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            {/* MODAL */}
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

                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl mb-3 border-gray-300"
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl mb-3 border-gray-300"
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-xl mb-3 border-gray-300"
                            required
                        />

                        <span className="font-bold block mt-2 mb-2">Select Role</span>

                        <div className="space-y-2 text-sm">
                            {["admin","analyst","viewer"].map((r)=>(
                                <label key={r} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="role"
                                        value={r}
                                        checked={data.role === r}
                                        onChange={handleRoleChange}
                                    />
                                    {r}
                                </label>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 bg-green-400 text-white font-bold rounded-xl py-2 hover:bg-green-500"
                        >
                            Sign Up
                        </button>

                        <button
                            type="button"
                            onClick={()=>setIsOpen(false)}
                            className="w-full mt-4 bg-red-400 text-white font-bold rounded-xl py-2 hover:bg-red-500"
                        >
                            cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}