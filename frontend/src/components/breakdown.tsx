import { useState , useEffect } from "react"
import axios from "axios"

import { PieChart, Pie, Cell, Tooltip,  ResponsiveContainer, Legend } from "recharts"


interface CategoryData{
    _id:string;
    total:number;
}

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#F59E0B",
  "#10B981",
  "#EF4444"
];



export default function Breakdown(){

    const [data , setData] = useState<CategoryData[]>([]);

    useEffect(()=>{
        fetchCategoryStats();
    },[])

    const fetchCategoryStats = async()=>{
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get("http://localhost:4000/api/dashboard/category",
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
                
            )

            setData(res.data)
        } catch (error) {
            
        }
    }
    return(
        <h1>This is breakdown page</h1>
    )
 }