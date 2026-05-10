import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import axios from "axios";

export interface UserData {
  amount: number;
  type: string;
  category: string;
  date: string;
  note: string;
}

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default function Transactions() {
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);

  const [formData, setFormData] = useState<UserData>({
    amount: 0,
    type: "income",
    category: "",
    date: "",
    note: "",
  });

  const [editId, setEditId] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (editId) {
        await API.patch(`/record/${editId}`, formData);
      } else {
        await API.post("/record", formData);
      }

      await fetchRecords();

      setIsOpen(false);
      setEditId(null);

      setFormData({
        amount: 0,
        type: "income",
        category: "",
        date: "",
        note: "",
      });
    } catch (err: any) {
      console.log(err.response?.data || err.message);
    }
  };

  const fetchRecords = async () => {
    try {
      const res = await API.get("/record", {
        params: {
          type: type === "All" ? undefined : type,
          category:
            category === "All Categories" || category === ""
              ? undefined
              : category,
        },
      });

      setTransactions(res.data.records);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [type, category]);

  const handleDelete = async (id: string) => {
    try {
      await API.delete(`/record/${id}`);
      fetchRecords();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "amount" ? Number(value) : value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block sticky h-[calc(100vh-80px)]">
          <SideBar />
        </div>

        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                Transactions
              </h1>

              <p className="text-gray-400 dark:text-gray-500 text-sm pt-1">
                Manage and track all financial transactions
              </p>
            </div>

            <div className="w-full md:w-auto">
              <button
                onClick={() => {
                  setEditId(null);
                  setIsOpen(true);
                }}
                className="text-white rounded-xl font-bold bg-green-400 border border-green-400 p-2 w-full md:w-40 transition-transform duration-300 hover:scale-105 hover:bg-green-500"
              >
                Add Transaction
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-5 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e293b] w-full rounded-xl p-4 md:p-8 transition-colors duration-300">
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto flex-1 min-w-[250px]">
                <input
                  type="search"
                  placeholder="Search for transactions..."
                  className="border-2 bg-gray-100 dark:bg-[#334155] dark:border-gray-600 dark:text-white border-gray-300 w-full rounded-md px-2 py-1 focus:outline-none"
                />
              </div>

              <div className="w-full md:w-auto flex-1 min-w-[150px]">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="border-2 bg-gray-100 dark:bg-[#334155] dark:border-gray-600 dark:text-white border-gray-300 w-full rounded-md px-2 h-9"
                >
                  <option value="All">All Types</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="w-full md:w-auto flex-1 min-w-[150px]">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-2 bg-gray-100 dark:bg-[#334155] dark:border-gray-600 dark:text-white border-gray-300 w-full rounded-md px-2 h-9"
                >
                  <option value="">Select category</option>
                  <option value="All Categories">
                    All Categories
                  </option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mt-5 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e293b] rounded-xl overflow-x-auto transition-colors duration-300">
            <div className="min-w-[800px] p-4">
              <div className="grid grid-cols-6 gap-4 p-2 font-bold border-b border-gray-300 dark:border-gray-700">
                <span>Date</span>
                <span>Type</span>
                <span>Category</span>
                <span>Note</span>
                <span>Amount</span>
                <span>Actions</span>
              </div>

              {Array.isArray(transactions) &&
                transactions.map((t: any) => (
                  <div
                    key={t._id}
                    className="grid grid-cols-6 gap-4 p-2 py-4 border-b border-gray-100 dark:border-gray-700 last:border-0 items-center"
                  >
                    <span>
                      {new Date(t.date).toLocaleDateString()}
                    </span>

                    <span className="capitalize">
                      {t.type}
                    </span>

                    <span>{t.category}</span>

                    <span
                      className="truncate"
                      title={t.note}
                    >
                      {t.note}
                    </span>

                    <span
                      className={
                        t.type === "income"
                          ? "text-green-500 font-semibold"
                          : "text-red-500 font-semibold"
                      }
                    >
                      {t.type === "income" ? "+" : "-"}$
                      {t.amount}
                    </span>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(t._id)}
                        className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79"
                          />
                        </svg>
                      </button>

                      <button
                        onClick={() => {
                          setFormData({
                            amount: t.amount,
                            type: t.type,
                            category: t.category,
                            date: t.date.split("T")[0],
                            note: t.note,
                          });

                          setEditId(t._id);
                          setIsOpen(true);
                        }}
                        className="text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 p-1 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60] p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#1e293b] dark:text-white w-full max-w-md max-h-[95vh] overflow-y-auto p-6 rounded-2xl shadow-xl relative transition-colors duration-300"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-4">
                {editId ? "Edit" : "Add"} Transaction
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                <label className="text-sm font-medium">
                  Amount
                </label>

                <input
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleChange}
                  className="border p-2 rounded border-gray-300 dark:border-gray-600 dark:bg-[#334155] bg-gray-50 focus:outline-green-400"
                />

                <label className="text-sm font-medium">
                  Type
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="border p-2 rounded border-gray-300 dark:border-gray-600 dark:bg-[#334155] bg-gray-50"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>

                <label className="text-sm font-medium">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border p-2 rounded border-gray-300 dark:border-gray-600 dark:bg-[#334155] bg-gray-50"
                >
                  <option value="">Select Category</option>
                  <option>Food</option>
                  <option>Travel</option>
                  <option>Shopping</option>
                  <option>Others</option>
                </select>

                <label className="text-sm font-medium">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-2 rounded border-gray-300 dark:border-gray-600 dark:bg-[#334155] bg-gray-50"
                />

                <label className="text-sm font-medium">
                  Note
                </label>

                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="border p-2 rounded border-gray-300 dark:border-gray-600 dark:bg-[#334155] bg-gray-50 h-24 resize-none"
                />

                <div className="flex gap-4 mt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-green-400 text-white p-2 rounded-md font-bold hover:bg-green-500 transition-colors"
                  >
                    {editId ? "Update" : "Create"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 border-2 bg-red-400 text-white border-red-400 p-2 rounded-md font-bold hover:bg-red-500 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}