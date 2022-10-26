import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [data,setData] = useState({
        "dial_code":"+91",
    })
    const navigate = useNavigate()
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    

        const handleSubmit=(e)=>{
            e.preventDefault();
            if(!data.phone){
                alert("Fill the details")
            }
            else{
                axios.post("https://staging.fastor.in/v1/pwa/user/register",data).then((res)=>alert("Otp send to your mobile")).then((res)=>localStorage.setItem("phone",data.phone)).then((res)=>navigate("/otp")).catch((err)=>console.log(err))
            }
            }

  return (

    <div className='container'>
        <h1 className='main_heading'>Enter Your Mobile Number</h1>
        <p className='second_line'>We will send you the 6 digit verification code.</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name='phone' onChange={handleChange} placeholder="Enter your number"  /> 
            <br />
            <input type="submit" value='Send Code'   />

        </form>
    </div>
  )
}

export default Signup