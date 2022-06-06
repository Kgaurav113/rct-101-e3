import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const[count,setcount]=useState(1)
  const addcart=()=>{
    setcount(count+1)
  }
  const removecart=()=>{
    setcount(count-1)
  }
  
  return <CartContext.Provider value={{count,addcart,removecart}}>
    {children}</CartContext.Provider>;
};