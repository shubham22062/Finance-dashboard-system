import Navbar from "../components/navbar";

export default function Dashboard(){
    return (
        
        <div>
            <Navbar/>
            <div className="min-h-screen flex text-lg  ">
                <aside className="bg-black py-10 px-4 w-80 hidden md:block">
                    <nav className="">
                    <button className="font-bold text-white rounded-xl bg-green-400 px-8 py-2 m-2">Dashboard</button>
                    <button className="font-bold text-white rounded-xl bg-green-400 px-8 py-2 m-2">Dashboard</button>
                    <button className="font-bold text-white rounded-xl bg-green-400 px-8 py-2 m-2">Dashboard</button>
                    <button className="font-bold text-white rounded-xl bg-green-400 px-8 py-2 m-2">Dashboard</button>
                    </nav>
                </aside>
            </div>
        </div>

    )
}