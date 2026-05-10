import { useState, useEffect } from "react";
import axios from "axios";

interface summaryData {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
}

export default function Cards() {
  const [data, setData] = useState<summaryData>({
    totalIncome: 0,
    totalExpense: 0,
    netBalance: 0,
  });

  const fetchSummmary = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:4000/api/dashboard/summary",
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

  useEffect(() => {
    fetchSummmary();
  }, []);

  return (
    <div className="mt-4 flex gap-2 flex-wrap">
      
      {/* TOTAL INCOME */}
      <div className="border-2 rounded-xl p-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-90 h-40 transition-transform duration-300 hover:scale-105">
        
        <div className="flex justify-between">
          <span className="text-gray-400 dark:text-gray-300">
            Total Income
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 border-2 rounded-md bg-green-200 border-green-300 dark:bg-green-900 dark:border-green-700 dark:text-green-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </div>

        <span className="block font-bold text-green-700 dark:text-green-400 text-2xl pt-7">
          ${data.totalIncome}
        </span>

        <div className="flex pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>

          <span className="block text-sm text-gray-400 dark:text-gray-400">
            +12.5% from last month
          </span>
        </div>
      </div>

      {/* TOTAL EXPENSE */}
      <div className="border-2 rounded-xl p-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-90 h-40 transition-transform duration-300 hover:scale-105">
        
        <div className="flex justify-between">
          <span className="text-gray-400 dark:text-gray-300">
            Total Expenses
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 border-2 rounded-md bg-red-200 border-red-300 dark:bg-red-900 dark:border-red-700 dark:text-red-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
            />
          </svg>
        </div>

        <span className="block font-bold text-red-500 dark:text-red-400 text-2xl pt-7">
          ${data.totalExpense}
        </span>

        <div className="flex pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>

          <span className="block text-sm text-gray-400 dark:text-gray-400">
            -3.2% from last month
          </span>
        </div>
      </div>

      {/* NET BALANCE */}
      <div className="border-2 rounded-xl p-6 border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-950 w-90 h-40 transition-transform duration-300 hover:scale-105">
        
        <div className="flex justify-between">
          <span className="text-gray-400 dark:text-gray-300">
            Net Balance
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 border-2 rounded-md bg-blue-200 border-blue-300 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>
        </div>

        <span className="block font-bold text-blue-500 dark:text-blue-400 text-2xl pt-7">
          ${data.netBalance}
        </span>

        <div className="flex pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span className="block text-sm text-gray-400 dark:text-gray-400">
            Available Balance
          </span>
        </div>
      </div>
    </div>
  );
}