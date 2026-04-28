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

    const [editId , setEditId] = useState<string|null>(null);

    const handleSubmit = async(e:any)=>{
        e.preventDefault();

       try {
         
        if(editId){
          await API.patch(`/record/${editId}`, formData) // ✅ FIXED
        }else{
            await API.post("/record", formData)
        }
         await fetchRecords();
         setIsOpen(false);
         setEditId(null);

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


    const handleChange = (e:any)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:name==="amount" ? Number(value):value
        });
    };

    return(
        
        <div className="min-h-screen">
            <div className="sticky top-0 z-50">
                <Navbar/>
            </div>
              
        <div className=" flex overflow-hidden">
             <div className="sticky h-[calc(100vh-80px)]">
                <SideBar/>
                </div>
        <div className="flex-1 p-6 md:p-6 overflow-x-auto">
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

            <div className="mt-5 border-2 border-gray-300  w-full rounded-xl p-8 md:p-8 ">
                <div className="flex gap-4 flex-wrap">
                    <div>
                    <input type="search"
                     className="border-2 bg-gray-100 border-gray-300 w-80 max-w-full rounded-md px-2"
                     placeholder="Search for transactions..."
                    />
                    </div>
                    <div>
                        <select
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                            className="border-2 bg-gray-100 border-gray-300 w-80 max-w-full rounded-md px-2 h-7"
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
                            className="border-2 bg-gray-100 border-gray-300 w-80 max-w-full rounded-md px-2 h-7"
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
          
          <div className=" mt-5 border-2 w-full min-h-full border-gray-300 rounded-xl p-4 overflow-x-auto">
            <div className="grid grid-cols-6 min-w-[700px] gap-4 p-2 font-bold">
                <span>Date</span>
                <span>Type</span>
                <span>Category</span>
                <span>Note</span>
                <span>Amount</span>
                <span>Actions</span>
            </div>

           {Array.isArray(transactions) && transactions.map((t:any)=>(
            <div key={t._id} className="grid grid-cols-6 min-w-[700px] gap-4 p-2 mt-10 border-t border-gray-300">
                
                <span>{new Date(t.date).toLocaleDateString()}</span>
                <span>{t.type}</span>
                <span>{t.category}</span>
                <span>{t.note}</span>
                <span className={t.type==="income" ? "text-green-500" : "text-red-500"}>{t.amount}</span>
                <span >
                    <button 
                    onClick={()=>handleDelete(t._id)}
                    className="text-red-500 m-2"
                    ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>

                    <button onClick={ ()=>{// ✅ FIXED
                        setFormData({
                            amount:t.amount,
                            type:t.type,
                            category:t.category,
                            date:t.date.split("T")[0],
                            note:t.note
                        });
                        setEditId(t._id);
                        setIsOpen(true)
                    }}
                    className="text-green-500 m-2">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

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

        <div className="bg-white w-125 max-w-[95%] max-h-[90vh] overflow-y-auto p-4 rounded-2xl shadow-xl relative"
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
                className="bg-green-400 w-30 max-w-full text-white p-2 rounded-md mt-2 hover:bg-green-500">
                Create 
              </button>

              <button onClick={()=>setIsOpen(false)}
                className="rounded-md  border-2 mt-2 bg-red-400 text-white border-red-400 w-30 max-w-full p-2 hover:bg-red-600">
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