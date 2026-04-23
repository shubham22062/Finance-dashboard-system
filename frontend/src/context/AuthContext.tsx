import { createContext, useContext, useState, useEffect } from "react";

interface User{
    name:string;
    email:string;
    role:"admin"|"analyst"|"viewer";
}

interface AuthType{
    user:User|null;
    token:string|null;
    login:(user:User, token:string)=>void;
    logout:()=>void
}

const AuthContext = createContext<AuthType|null>(null);

export const AuthProvider = ({children}:any)=>{
    const [user, setUser] = useState<User|null>(null);
    const [token, setToken] = useState<string|null>(null);

    useEffect(()=>{
        const u = localStorage.getItem("user")
        const t = localStorage.getItem("token")

        if(u && t){
            setUser(JSON.parse(u));
            setToken(t);
        }
    },[])

    const login = (user:User, token:string)=>{
        setUser(user);
        setToken(token)

        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("token",token);
    };

    const logout = ()=>{
        setUser(null);
        setToken(null);

        localStorage.clear()
    };

    return(
        <AuthContext.Provider value={{user,token ,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)!;