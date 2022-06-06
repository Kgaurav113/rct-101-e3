import React,{useState,useEffect, useContext} from "react";
import axios from 'axios'
import { CartContext } from "../../../context/CartContext";
const Product = () => {
  // Note: this id should come from api
  
const {addtocart} =useContext(CartContext)
const{removecart}=useContext(CartContext)
const {count}=useContext(CartContext)
  const[data,setdata]=useState([])

 
  const[counter,setcounter]=useState(1)
  const addhandle=()=>{
          setcounter(counter+1)
  }
  const handleminus=()=>{
    setcounter(counter-1)
}
  useEffect(()=>{
  
    const productdata=async()=>{
      let r=await axios.get(`http://localhost:8080/products`);
      console.log(r.data);
      setdata(r.data)
      console.log(r.data)
    }

    productdata()
  })
  const product = { id: 1 };
  return (
  
     
          <div>
      {data.map((data,index)=>(

     
    <div data-cy={`product-${product.id}`}>
     
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addtocart}>ADD:{count}</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={addhandle}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            <button>{counter}</button>
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={handleminus}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={removecart}>REMOVE</button>
      </div>
    </div>
   
   ))}
 </div>
     
  );
};

export default Product;