import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";


export default function Dashboard(){
   


    
     
    return (
       <div className="min-h-screen">
        <Navbar/>
        <div className=" flex">
            <SideBar/>
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Dashboard content </h1>
            </div>
        </div>

       </div>

    )
}