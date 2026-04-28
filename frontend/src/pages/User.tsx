import Navbar from "../components/navbar"
import SideBar from "../components/sidebar"


export default function User(){
    return(
        <div className="min-h-screen">
                <Navbar/>
                <div className=" flex">
                    <SideBar/>
                    <div className="flex-1 p-6">
                        <div className=" flex justify-between">
                        <div>
                        <h1 className="text-2xl font-bold">User Management </h1>
                        <p className="text-gray-400">Manage users, roles, and permissions</p>
                        </div>
                        <div>
                        <button className="rounded-md text-white font-bold bg-green-400 border border-green-500 hover:bg-green-600 w-50 p-2"> + Add user</button>
                        </div>
                        </div>


                     <div className="mt-8 flex gap-4 p-2 text-center">
                            <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Total User's</span>
                                <span className="text-blue-500 py-3 block text-4xl font-bold">5</span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Active User</span>
                                <span className="text-green-400 py-3 block text-4xl font-bold">5</span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Admins</span>
                                <span className="text-violet-400 py-3 block text-4xl font-bold">5</span>
                        </div>

                        <div className="border-2 border-gray-200 w-65 rounded-md p-2 transition-transform duration-300 hover:scale-105">
                                <span className="text-gray-400 ">Analyst's</span>
                                <span className="text-orange-500 py-3 block text-4xl font-bold">5</span>
                        </div>
                    </div>

                    <div className="w-full border-2 border-gray-200 mt-8 p-6 rounded-md">
                        <input
                            type="search"
                            placeholder="search the user by name or email..."
                            className="border-2 border-gray-200 bg-gray-200 w-[90%] p-2 rounded-md"
                        />
                    </div>

                    </div>
                </div>
        
               </div>
        
    )
}