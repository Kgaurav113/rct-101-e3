import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate=useNavigate()
  const[logincheck,setlogincheck]=useState({});
  const{login}=useContext(AuthContext);
  const changehandle=(e)=>{
    const{name,value}=e.target;
    setlogincheck({...logincheck,[name]:value})
  }
  const finalsubmit=(e)=>{
    e.preventDefault();
    login()
    navigate("Product")
  }
  return (
    <div>
      <input data-cy="login-email" type="email" name="email" placeholder="eneter email" onChange={changehandle}/>
      <input data-cy="login-password" type="password" name="password" placeholder="enter password " onChange={changehandle}/>
      <button data-cy="login-submit" type="submit" onSubmit={finalsubmit} >Login</button>
    </div>
  );
};

export default Login;
