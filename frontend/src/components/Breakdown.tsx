import { useState, useEffect } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { API_URI } from "../utlis/cred";

interface CategoryData {
  _id: string;
  total: number;
}

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#F59E0B",
  "#10B981",
  "#EF4444",
];

export default function Breakdown() {
  const [data, setData] = useState<CategoryData[]>([]);

  useEffect(() => {
    fetchCategoryStats();
  }, []);
 

  const fetchCategoryStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API_URI}/api/dashboard/category`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-4 w-full bg-white dark:bg-[#1e293b] transition-colors duration-300">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Category Distribution
      </h1>

      <p className="text-gray-500 dark:text-gray-400 text-lg mt-2">
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
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}