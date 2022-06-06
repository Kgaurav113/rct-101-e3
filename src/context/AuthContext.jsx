import React, {useState } from 'react';
import { createContext } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
export const AuthContext =createContext()
export const AuthProvider=({children})=>{

    const[isAuth,setisAuth]=useState(false);
    const navigate=useNavigate();
    const location =useLocation();
    console.log(location)
    const login=()=>{
        
       
        setisAuth(true)
        navigate("/products")
        
      
    };
    const signout=()=>{
        setisAuth(false)
        navigate("/")
    };
   const value={isAuth,login,signout}
     return(
         <AuthContext.Provider value={value}>
             {children}
         </AuthContext.Provider>
     )
}