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
            console.error(error);
        }
    };

    return(
        <div className="border-2 border-gray-200 rounded-3xl p-4 w-full">

      <h1 className="text-3xl font-bold">
        Category Distribution
      </h1>

      <p className="text-gray-500 text-lg mt-2">
        Income and expense distribution by category
      </p>

      <div className="w-full h-[350px] mt-10">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="total"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={140}
              label={({ name, percent }) =>
                `${name} (${((percent || 0) * 100).toFixed(0)}%)`
              }
            >

              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
    )
 }