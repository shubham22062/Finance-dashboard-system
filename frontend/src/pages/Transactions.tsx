import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import axios from "axios";

export interface UserData{
    amount:number;
    type:string;
    category:string;
    date:string;
    note:string;
}

// ✅ Move API outside
const API = axios.create({
    baseURL:"http://localhost:4000/api",
});

API.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"))
    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default function Transactions(){
    const [type,setType] = useState("All");
    const [category, setCategory] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [transactions, setTransactions] = useState<any[]>([]);

    const [formData, setFormData] = useState<UserData>({
        amount:0,
        type:"income",
        category:"",
        date:"",
        note:""
    });

    const handleSubmit = async(e:any)=>{
        e.preventDefault();

       try {
         await API.post ("/record", formData); // ✅ FIXED

         await fetchRecords();
         setIsOpen(false);

         setFormData({
            amount:0,
            type:"income",
            category:"",
            date:"",
            note:"",
         });
       } catch (err:any) {
            console.log(err.response?.data || err.message);
       }
    };

   const fetchRecords = async()=>{
    try {
        const res = await API.get("/record",{ // ✅ FIXED
            params:{
                type: type==="All"? undefined: type,
                category:category === "All Categories" ? undefined : category,
            },
        });

        console.log("API RESPONSE:", res.data)

        setTransactions(res.data.records);
    } catch (err) {
        console.log(err);
    }
   };

   useEffect(()=>{
        fetchRecords();
    },[type,category]);

    const handleDelete = async(id:string)=>{
        try {
            await API.delete(`/record/${id}`); // ✅ FIXED
            fetchRecords();
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async (id:string, updatedData:any)=>{
        try {
            await API.patch(`/record/${id}`, updatedData); // ✅ FIXED
            fetchRecords();
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e:any)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:name==="amount" ? Number(value):value
        });
    };

    return(
        
        <div className="min-h-screen">
              <Navbar/>
        <div className=" flex">
             <SideBar/>
        <div className="flex-1 p-6">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Tansactions </h1>
                    <p className="text-gray-400 text pt-1">Manage and track all Financial transactions</p>
                </div>
                <div>
                    <button onClick={()=>setIsOpen(true)}
                     className="text-white rounded-xl font-bold bg-green-400 border border-green-400 p-2 w-40 transition-transform duration-300 hover:scale-105 hover:bg-green-500 ">Add Transction</button>
                </div>
            </div>

            <div className="mt-5 border-2 border-gray-300 h-25 w-full rounded-xl p-8 ">
                <div className="flex gap-4">
                    <div>
                    <input type="search"
                     className="border-2 bg-gray-100 border-gray-300 w-80 rounded-md px-2"
                     placeholder="Search for transactions..."
                    />
                    </div>
                    <div>
                        <select
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                            className="border-2 bg-gray-100 border-gray-300 w-80 rounded-md px-2 h-7"
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                            <option value="All">All</option>
                        </select>
                    </div>

                    <div>
                        <select
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            className="border-2 bg-gray-100 border-gray-300 w-80 rounded-md px-2 h-7"
                         >
                            <option value="">Select category</option>
                            <option value="All Categories">All Categories</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
            </div>
          
          <div className=" mt-5 border-2 w-full min-h-full border-gray-300 rounded-xl">

           {Array.isArray(transactions) && transactions.map((t:any)=>(
            <div key={t._id} className="grid grid-cols-6 gap-4 p-2 border-t">
                <span>{new Date(t.date).toLocaleDateString()}</span>
                <span>{new Date(t.date).toLocaleTimeString()}</span>
                <span>{t.category}</span>
                <span>{t.note}</span>
                <span className={t.type==="income" ? "text-green-500" : "text-red-500"}>{t.amount}</span>
                <span>
                    <button 
                    onClick={()=>handleDelete(t._id)}
                    className="text-red-500"
                    >Delete</button>
                    <button onClick={()=>handleUpdate(t._id,{ // ✅ FIXED
                        amount:Number(t.amount)+100
                    })}
                    className="text-green-500">
                        Action
                    </button>
                </span>
            </div>
           ))}

        </div>
     </div>

     {/* MODAL */}
     {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}>

        <div className="bg-white w-125 h-150 p-4 rounded-2xl shadow-xl relative"
          onClick={(e) => e.stopPropagation()}>

          <button onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 text-xl font-bold">✕</button>

          <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <label>Amount</label>
            <input name="amount" value={formData.amount} onChange={handleChange}
              className="border p-2 rounded border-gray-300 bg-gray-200" />

            <label>Type</label>
            <select name="type" value={formData.type} onChange={handleChange}
              className="border p-2 rounded border-gray-300 bg-gray-200">
                <option value="All">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}
              className="border p-2 rounded border-gray-300 bg-gray-200">
              <option value="">Select Category</option> {/* ✅ FIXED */}
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Others</option>
            </select>

            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange}
              className="border p-2 rounded border-gray-300 bg-gray-200" />

            <label>Note</label>
            <textarea name="note" value={formData.note} onChange={handleChange}
              className="border p-2 rounded border-gray-300 bg-gray-200" />

            <div className="flex gap-4">
              <button type="submit"
                className="bg-green-400 w-45 text-white p-2 rounded-md mt-2 hover:bg-green-500">
                Create Transaction
              </button>

              <button onClick={()=>setIsOpen(false)}
                className="rounded-md bg-gray-300 border-2 border-gray-400  w-40">
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