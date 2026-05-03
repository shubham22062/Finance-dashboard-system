import { useState } from "react"
import { BarChart, Bar,XAxis, YAxis, Tooltip, Legend , ResponsiveContainer } from "recharts"
import axios from axios;

interface User{
    category:[""];
    type:string;
    date:string;
    id:string;
}


export default function Overview(){
    const [data , setData] = useState<User>({
        category:[""],
        type:"",
        date:"",
        id:"",
    })

    const fetchData = async()=>{
        try {
            const user = await axios.get("http://localhost:4000/summary")

            setData(user);
            console.log("data fetch sucessfully")
        } catch (error) {
            console.error(error);
        }
    }



    return(
        <div className="border-2 border-gray-200 rounded-md w-80 p-4">
           <h1>Financial Performance Over Time</h1>
           <p className="text-gray-400 pt-1">Income, expenses, and net balance trends</p>

        </div>
    )
}