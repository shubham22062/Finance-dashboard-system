import { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

interface ChartData {
  name: string;
  savings: number;
}

export default function Trends() {
  const [data, setData] = useState<ChartData[]>([]);

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:4000/api/dashboard/trends",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const formatted = res.data.map((item: any) => {
        const income = item.income || 0;
        const expense = item.expense || 0;

        const savings =
          income === 0 ? 0 : ((income - expense) / income) * 100;

        return {
          name: `${months[item._id.month - 1]} ${item._id.year.toString().slice(2)}`,
          savings: Number(savings.toFixed(1))
        };
      });

      setData(formatted);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-gray-100">

      <h1 className="text-2xl font-bold">
        Savings Rate Trend
      </h1>

      <p className="text-gray-500 mt-1">
        Monthly savings as percentage of income
      </p>

      <div className="w-full h-[320px] mt-6">
        <ResponsiveContainer>
          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />

            <Tooltip formatter={(value:any) => `${value}%`} />

            {/* Gradient */}
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.2}/>
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="savings"
              stroke="#7c3aed"
              strokeWidth={2}
              fill="url(#purpleGradient)"
              dot={false}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}