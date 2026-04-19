

export  default function Landing(){

 const Navbar = ()=>(
   <nav className="flex justify-between items-center px-10 h-20 bg-gray-50 border-b border-gray-100">
    <div className="font-bold">Capital Dash</div>
    <div className="flex gap-4 ">
      <button className="rounded-3xl border-2  border-gray-300 hover:bg-gray-400 px-2 py-2">Sign In</button>
      <button className="rounded-3xl border-2 p-3 bg-green-400 border-green-400 text-white font-bold hover:bg-green-500">Get Started</button>
    </div>

   </nav>
   
 )
    


 return(
  <div>
    <div>
        <Navbar/>
    </div>
    <div>
      <p className="rounded-4xl bg-cyan-500 text-center mt-30 border mr-150 ml-150 border-cyan-200 text-white">Finance Management Reimagined</p>
    </div>
    <div className="text-center">
      <h1 className="font-bold  p-10 text-6xl">Powerful Finance Dashboard for</h1>
      <h2 className=" text-green-400 font-bold text-6xl">Modern Teams</h2>
      <p className="pt-10 text-2xl ml-90 mr-90 text-gray-400">Streamline your financial operations with advanced analytics, role-based access control, and real-time insights. Built for teams that demand excellence.</p>
      <button className="font-bold rounded-3xl border text-white text-lg bg-green-400 border-green-400 mt-10 hover:bg-green-500 px-3 py-3">Start Free Trail </button>
    </div>
    <div className="flex">
    <div className=" rounded-3xl py-10 px-10 mt-12 border-2  ml-80 mr-10 border-gray-300 hover:bg-gray-200 transition-transform duration-300 hover:scale-105">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
      <p className="font-bold text-3xl text-green-300 ">100+</p>
      <p className="text-gray-500">Active Users</p>
    </div>
     <div className=" rounded-3xl py-10 px-10 mt-12 border-2 border-gray-300 mr-10 hover:bg-gray-200 transition-transform duration-300 hover:scale-105">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
      <p className="font-bold text-3xl text-green-300 ">50K+</p>
      <p className="text-gray-500">Transactions</p>
    </div>
     <div className=" rounded-3xl py-10 px-10 mt-12 border-2  border-gray-300 mr-10 hover:bg-gray-200 transition-transform duration-300 hover:scale-105">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
       </svg>
      <p className="font-bold text-3xl text-green-300 ">$10M+</p>
      <p className="text-gray-500 px-4">Managed</p>
    </div>
     <div className=" rounded-3xl py-10 px-10 mt-12 border-2  border-gray-300 mr-10 hover:bg-gray-200 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
   </svg>
      <p className="font-bold text-3xl text-green-300 ">99.9%</p>
      <p className="text-gray-500 px-4">Uptime</p>
    </div>
    </div>
    
    </div>
 )
}