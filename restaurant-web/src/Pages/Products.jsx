import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
const [data,setData] = useState([]);

    
    const getRestaurant=async()=>{
        
      await  fetch('https://staging.fastor.in/v1/m/restaurant',{
        method:"POST",
       headers:{
        //    "content-type":"application/json",
           "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTQzNCIsImVtYWlsIjoiNjMwNjU4NTM3NUBmYXN0b3IuaW4iLCJwaG9uZSI6IjYzMDY1ODUzNzUiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjItMTAtMjZUMTA6MjM6NDIuMDAwWiIsImlhdCI6MTY2Njc4MTczNSwiZXhwIjoxNjc0MDM5MzM1fQ.qHMxPl6T6VeWrh7PTFdGNYcpU9WUzr1PpYyN5PhSIow"

        }   
    }).then((res)=>res.json()).then((res)=>setData(res))
// axios.get("https://staging.fastor.in/v1/m/restaurant").then((res)=>setData(res.data)).catch((err)=>console.log(err))
}

console.log(data)

useEffect(() => {
   getRestaurant()
}, [])





  return (

    <div>Products</div>
  )
}

export default Products