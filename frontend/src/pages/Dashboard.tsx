import Navbar from "../components/navbar";
import SideBar from "../components/sidebar";
import Cards from "../components/cards";
import Overview from "../components/overview";
import Breakdown from "../components/breakdown";



export default function Dashboard(){
   


    
     
    return (
       <div className="min-h-screen">
        <Navbar/>
        <div className=" flex">
            <SideBar/>
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold">Dashboard Overview </h1>
                 <p className="text-gray-600 mt-3">Monitor your financial performance at a glance</p>

               
                <Cards/>
              
          <div className="mt-5 grid grid-cols-2 gap-3">
             <div>
            <Overview/>
           </div>

           <div>
            <Breakdown/>
           </div>
          </div>

          </div>
        </div>

       </div>

    )
}