import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";



export default function Transactions(){
    


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
                    <button className="text-white rounded-xl font-bold bg-green-400 border border-green-400 p-2 w-40 transition-transform duration-300 hover:scale-105 hover:bg-green-500 ">Add Transction</button>
                </div>
            </div>

            <div className="mt-5 border-2 border-gray-300 h-25 w-full rounded-xl p-8">
                <div>
                    <input type="search"
                     className="border-2 bg-gray-100 border-gray-300 w-80 rounded-md px-2"
                     placeholder="Search for transactions..."
                     
                    />
                </div>
            </div>
          

        </div>
     </div>
                
     </div>
    )
}