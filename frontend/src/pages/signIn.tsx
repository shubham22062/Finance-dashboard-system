import { useState } from "react"
import type { ChangeEvent,FormEvent } from "react"
import axios from "axios"

import { useNavigate } from "react-router-dom"

interface LoginData{
    email:string;
    password:string;
}

export default function SignIn(){

    const navigate = useNavigate();
    const [data, setData] = useState<LoginData>({
        email:"",
        password:""
    })

    // handle input change

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
            setData({
                ...data,
                [e.target.name]:e.target.value
            })
    }

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("data sent" ,data)
        try {
            const res = await axios.post("http://localhost:4000/api/auth/login",data)

            localStorage.setItem("token", res.data.token)

            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Login SuccessFul")

            navigate("/dashboard")
        } catch (error:any) {
            console.error(error.response?.data||error.message)
            alert("Invalid credentails")
        }
    }


    return(
        
        <div className="flex justify-center items-center bg-green-50 min-h-screen">
            <form onSubmit={handleSubmit}
                className="w-110">
                <div className="bg-gray-100 justify-items-center p-10 rounded-2xl">
                <h1 className="font-bold">Captail Dash</h1>
                <span className="text-gray-500 block">Welcome Back!!</span>

                <label>
                    Username 
                    <input 
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="write your username"
                        className="w-full p-5 rounded-xl border-gray-300 border"
                        required
                    />
                </label>

                <label >
                    password
                    <input
                        type="password"
                        name = "password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="password"
                        className="w-full p-5 rounded-xl border-gray-300 border mb-7"
                        required
                    /> 
                </label>

                <button type ="submit" className=" flex justify-center rounded-xl bg-green-400 text-white p-4 hover:bg-green-500">SignIn</button>

                </div>
            </form>
        </div>
        
    )
}