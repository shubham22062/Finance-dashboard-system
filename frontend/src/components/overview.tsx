import { useEffect, useState } from "react"
import { BarChart, Bar,XAxis, YAxis, Tooltip, Legend , ResponsiveContainer, Line, CartesianGrid} from "recharts"
import axios from "axios";

interface ChartData{
    name:string;
    income:number;
    expense:number;
    net:number
}


export default function Overview(){
    const [data , setData] = useState<ChartData[]>([]);
      

    const fetchData = async()=>{
        try {
            const res = await axios.get("http://localhost:4000/api/dashboard/trends");

            const formatted = res.data.map((item:any)=>({
                name: `${item._id.month}/${item._id.year}` ,
                income: item.income,
                expense:item.expense,
                net:item.income - item.expense
            }));

            setData(formatted);
            console.log("data fetch sucessfully")
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
            fetchData();
    },[])



    return(
        <div className="border-2 border-gray-200 rounded-md w-80 p-4">
           <h1>Financial Performance Over Time</h1>
           <p className="text-gray-400 pt-1">Income, expenses, and net balance trends</p>
            <div className="w-full h-[300px] mt-6">
                <ResponsiveContainer>
                    <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="income" />
                    <Bar dataKey="expense" />
                    </BarChart>
                </ResponsiveContainer>
                </div>

        </div>
    )
}