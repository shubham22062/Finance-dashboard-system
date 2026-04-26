import { useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";



export default function Transactions(){
    const [type,setType] = useState("Income");
    const [category, setCategory] = useState("")

    const [isOpen, setIsOpen] = useState(false);

    const [fromData, setFormData] = useState({
        amount:"",
        type:"Income",
        category:"",
        data:"",
        note:""
    })


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
                            <option value="=income">Income</option>
                            <option value="expense">Expense</option>
                            
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
                            <option value="others">others</option>

                        </select>
                    </div>
                </div>

                

            </div>
          
          <div className=" mt-5 border-2 w-full min-h-full border-gray-300 rounded-xl">


            <div className="grid grid-cols-6 grid-flow-row-dense gap-4 p-2">
                <span>Date</span>
              <span>Time</span>
              <span>category</span>
             <span>Notes</span>
             <span>Amout</span>
             <span>Actions</span>
             </div>
            
          </div>

        </div>
     </div>
      {isOpen && (
  <div
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    onClick={() => setIsOpen(false)} // close on outside click
  >
    
    {/* Modal Box */}
    <div
      className="bg-white w-150 h-150 p-4 rounded-2xl shadow-xl relative"
      onClick={(e) => e.stopPropagation()} // prevent close inside
    >

      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-3 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

      <form className="flex flex-col gap-3">

        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded border-gray-300 bg-gray-200"
        />

        <label>Type</label>
        <select className="border p-2 rounded border-gray-300 bg-gray-200">
          <option>Income</option>
          <option>Expense</option>
        </select>

        <label>Category</label>
        <select className="border p-2 rounded border-gray-300 bg-gray-200">
          <option>Select Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>

        <label>Date</label>
        <input type="date" className="border p-2 rounded border-gray-300 bg-gray-200" />

        <label>Note</label>
        <textarea
          placeholder="Note"
          className="border p-2 rounded border-gray-300 bg-gray-200"
        />
        <div className="flex gap-4">
            <button
          type="submit"
          className="bg-green-400 w-45 text-white p-2 rounded-md mt-2 hover:bg-green-500"
        >
          Create Transaction
        </button>

        <button className="rounded-md bg-gray-300 border-2 border-gray-400  w-40">
            Cancel
        </button>
        </div>
        

      </form>
    </div>
  </div>
)}       
     </div>
     
    )
}