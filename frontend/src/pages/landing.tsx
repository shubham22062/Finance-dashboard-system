

export  default function Landing(){

 const Navbar = ()=>(
   <nav className="flex justify-between items-center px-10 h-20 bg-gray-50 border-b border-gray-100 fixed top-0 left-0 w-full z-50">
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
      <p className="rounded-4xl bg-gray-950 text-center mt-30 border mr-150 ml-150 border-gray-900 text-white">Finance Management Reimagined</p>
    </div>
    <div className="text-center">
      <h1 className="font-bold  p-10 text-6xl">Powerful Finance Dashboard for</h1>
      <h2 className=" text-green-400 font-bold text-6xl">Modern Teams</h2>
      <p className="pt-10 text-2xl ml-90 mr-90 text-gray-500">Streamline your financial operations with advanced analytics, role-based access control, and real-time insights. Built for teams that demand excellence.</p>
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


    <div className="border bg-gray-100 ml-20 mr-20 mt-20 py-10 border-gray-100">
    <div className="text-center mt-15">
      <h1 className="font-bold text-2xl">Everything You Need</h1>
      <p className="text-lg text-gray-400">Comprehensive features to manage your finances effectively</p>
    </div>

   <div className="grid grid-cols-3 grid-row-2 gap-4"> 
    <div className="border-2 rounded-xl border-gray-300 mt-10 bg-white ml-10 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      <p className="font-semibold py-2 px-2">Advanced Analytics</p>
      <p className="text-gray-500">Get deep insights into your financial data with interactive charts and reports</p>
    </div>

    <div className="border-2 rounded-xl border-gray-300 mt-10 bg-white ml-10 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
       <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
       </svg>
      <p className="font-semibold py-2 px-2">Role-Based Access</p>
      <p className="text-gray-500">Secure your data with granular permission controls for different user roles</p>
    </div>

    <div className="border-2 rounded-xl border-gray-300 mt-10 bg-white ml-10 mr-10 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
       <path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd" />
       </svg>
      <p className="font-semibold py-2 px-2">Real-time Dashboard</p>
      <p className="text-gray-500">Monitor your financial performance with live updates and trend analysis</p>
    </div>

    <div className="border-2 rounded-xl border-gray-300 mt-10 bg-white ml-10 mr-10 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
       <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
      </svg>
      <p className="font-semibold py-2 px-2">User Management</p>
      <p className="text-gray-500">Easily manage team members and assign appropriate access levels</p>
    </div>

    <div className="border-2 rounded-xl border-gray-300 mt-10 bg-white ml-10 mr-10 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
      <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
       </svg>
      <p className="font-semibold py-2 px-2">Secure & Complaint</p>
      <p className="text-gray-500">Enterprise-grade security with data encryption and audit trails</p>
    </div>

    <div className="border-2 rounded-xl border-gray-300 mt-10 bg-white ml-10 mr-10 transition-transform duration-300 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
        <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
       </svg>
       <p className="font-semibold py-2 px-2">Lightning Fast</p>
      <p className="text-gray-500">Built with modern technology for optimal performance and speed</p>
    </div>

    </div>
     </div>

    <div className="text-center mt-25">
      <h1 className="font-bold text-4xl">Choose Your Role</h1>
      <p className="text-gray-500 mt-3">Flexible access levels for every team members</p>
    </div>
    
    <div className="mt-5 ml-30 mr-10 flex gap-10 ">
      <div className="rounded-xl border-2 border-gray-300 transition-transform duration-300 hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
       <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
      </svg>
      <span>Viewer</span>
      <p className="text-gray-500 py-4 px-2">Read-only access to view dashboard and financial data</p>
      <p className="before:content-['✔️'] before:mr-1">View Transactions</p>
      <p className="before:content-['✔️'] before:mr-1">Access dashboard</p>
      <p className="before:content-['✔️'] before:mr-1">View Report</p>

      </div>

      <div className="rounded-xl border-2 border-green-400 transition-transform duration-300 hover:scale-105 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
         <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
       </svg>
      <span>Analyst</span>
      <p className="text-gray-500 py-4 px-2">Advance analytics and insights capabilities</p>
      <p className="before:content-['✔️'] before:mr-1">All Viewer features</p>
      <p className="before:content-['✔️'] before:mr-1">Advanced analytics</p>
      <p className="before:content-['✔️'] before:mr-1">Custom reports</p>
      <p className="before:content-['✔️'] before:mr-1">Data exports</p>

      </div>


      <div className="rounded-xl border-2 border-gray-300 transition-transform duration-300 hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
       <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
      </svg>
      <span>Admin</span>
      <p className="text-gray-500 py-4 px-2">Full control over all system features and users</p>
      <p className="before:content-['✔️'] before:mr-1">All Analyst features</p>
      <p className="before:content-['✔️'] before:mr-1">Manage transactions</p>
      <p className="before:content-['✔️'] before:mr-1">User Management</p>
      <p className="before:content-['✔️'] before:mr-1">System Setting</p>
      <p className="before:content-['✔️'] before:mr-1">Full CURD access</p>

      </div>
    </div>
    
    </div>
 )
}