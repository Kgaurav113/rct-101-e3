import React, { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

 



return <AuthContext.Provider >{children}</AuthContext.Provider>;

  
};
