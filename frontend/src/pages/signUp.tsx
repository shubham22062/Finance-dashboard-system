export default function SignUp (){
    return(
        <div className="justify-items-center">
            <h1 className="font-bold text-xl">Capital Dash</h1>

            <div>
                <span>Welcome!!</span>
                <p className="text-gray-500 text-sm">Create a new Account</p>
                <span className="block">Name</span>
                <input 
                 type="text"
                 placeholder="Enter your Name"
                 className="w-full px-4 py-4 border border-gray-200"
                  />
                  <span className="block">Email</span>
                  <input 
                   type="text"
                   placeholder="Enter your Email"
                   className="w-full px-4 py-4 border border-gray-200"
                  />
                  <span className="block">Password</span>
                  <input
                    type="text"
                    placeholder="Create a password"
                    className="w-full px-4 py-4 border border-gray-400"
                    />
                    <button className="border bg-green-400 border-green-400 text-white font-bold">SignUp</button>
            </div>
        </div>
    )
}