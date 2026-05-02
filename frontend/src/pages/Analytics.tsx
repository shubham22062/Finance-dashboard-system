import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";

export default function Analytics(){
    return(
        <div className="min-h-screen">
                <Navbar/>
                <div className=" flex">
                    <SideBar/>
                    <div className="flex-1 p-6 ">
                       <div className="flex justify-between">
                         <div>
                            <h1 className="text-3xl font-bold"> Advance Anaytics </h1>
                             <p className="text-gray-500 pt-2">Deep insights and comprehensive financial analysis</p>
                        </div>

                        <div>
                            <select className="border border-gray-200 bg-gray-100 rounded-md text-sm  w-40 p-1">
                                <option>All time</option>
                                <option>last 30 days</option>
                                <option>last 7 days</option>
                            </select>
                        </div>

                        <div >
                            <button className="rounded-md border border-gray-200 transition-transform duration-300 hover:scale-105 p-2 font-bold text-sm w-40 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>

                                Export
                            </button>
                        </div>
                       </div>
                    </div>
                </div>
        
               </div>
    )
}