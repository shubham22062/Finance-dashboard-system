import React, { useState, } from "react"
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";


type Role = "admin"|"analyst"|"viewer";

interface SignUpData{
    name:string;
    email:string;
    password:string;
    role:Role|""
}




export default function SignUp (){


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



     return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
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
      </form>
    </div>
  );
}