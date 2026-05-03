import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import Cards from "../components/cards";
import { useState } from "react";

export default function Analytics(){

    const [toggle , setToggle] = useState("Overview");

    const Ontoggle = ()=>{
        
    }
    
    return(
        <div className="min-h-screen">
                <Navbar/>
                <div className=" flex">
                    <SideBar/>
                    <div className="flex-1 p-6 ">
                     <div className="flex justify-between items-center flex-wrap gap-4">
                        <div>
                        <h1 className="text-3xl font-bold">Advance Analytics</h1>
                        <p className="text-gray-500 pt-2">
                            Deep insights and comprehensive financial analysis
                        </p>
                      </div>

                    {/* RIGHT CONTROLS */}
                    <div className="flex items-center gap-3">

                        <select className="border border-gray-200 bg-gray-100 rounded-md text-sm w-40 p-2">
                            <option>All time</option>
                            <option>Last 30 days</option>
                            <option>Last 7 days</option>
                        </select>

                        <button className="flex items-center justify-center gap-2 rounded-md border border-gray-200 transition-transform duration-300 hover:scale-105 p-2 font-bold text-sm w-40">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>

                            Export
                        </button>

                    </div>
                </div>


                {/*card*/}
                <div>
                    <Cards/>
                </div>
                   
                   <div className="bg-gray-300 border rounded-xl border-gray-300 w-full mt-5">
                        <div className="grid grid-cols-4 gap-5 p-2 text-center">
                            <button>Overview</button>
                            <button>Trends</button>
                            <button>breakdown</button>
                            <button>Insight</button>
                        </div>
                   </div>

                </div>
                
                </div>
        
               </div>
    )
}