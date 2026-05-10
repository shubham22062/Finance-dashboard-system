import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  CartesianGrid,
} from "recharts";
import axios from "axios";

interface ChartData {
  name: string;
  income: number;
  expense: number;
  net: number;
}

export default function Overview() {
  const [data, setData] = useState<ChartData[]>([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:4000/api/dashboard/trends",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const formatted = res.data.map((item: any) => ({
        name: `${item._id.month}/${item._id.year}`,
        income: item.income,
        expense: item.expense,
        net: item.income - item.expense,
      }));

      setData(formatted);

      console.log("data fetch sucessfully");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gray-50 dark:bg-[#1e293b] transition-colors duration-300">
      <h1 className="text-xl font-bold text-black dark:text-white">
        Financial Performance Over Time
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mt-1">
        Income, expenses, and net balance trends
      </p>

      <div className="w-full h-[350px] mt-10">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#6b7280"
              opacity={0.2}
            />

            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fill: "#9ca3af" }}
            />

            <YAxis
              stroke="#9ca3af"
              tick={{ fill: "#9ca3af" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend />

            {/* Bars */}
            <Bar
              dataKey="income"
              fill="#10b981"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="expense"
              fill="#ef4444"
              radius={[6, 6, 0, 0]}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="net"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}