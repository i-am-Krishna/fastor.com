import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './signup.css'

const OtpPage = () => {
    const navigate = useNavigate();
    const phone = localStorage.getItem("phone");
    const [otp,setOtp] = useState({
        "phone":phone,
        "dial_code":"+91",
    })

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setOtp({
            ...otp,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
console.log(otp)
        axios.post("https://staging.fastor.in/v1/pwa/user/login",otp).then((res)=>navigate("/products")).catch((err)=>console.log(err))
    }



  return (


    <div className='container'>
        <h1 className='main_heading'>OTP Verification</h1>
        <p className='second_line'>Enter the verification code we just sent on your Mobile number.</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name='otp' onChange={handleChange} placeholder="Enter your OTP"  /> 
            <br />
            <input type="submit" value='Verify'   />

        </form>
    </div>
  )
}

export default OtpPage