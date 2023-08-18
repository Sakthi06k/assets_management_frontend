import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import logout from "../images/icons/logout.png"
function ForgetPass() {
const [pass,setPass] = useState("");
const [cpass,setcPass] = useState("");
const [myEmail,setMyEmail] = useState("");
const [knownPass,setKnownPass] = useState("");
const navigate = useNavigate();
const [flag,setFlag] = useState(false);
const validatePass=()=>{
    axios.post('http://localhost:5000/ValidatePass',
      {
        myEmail,
        knownPass
      }
    )
    .then((data) => {
      console.log(data);
      if (data.data.status === 'ok') {
       setFlag(true)
      } else {
        alert("Invalid Password");
      }
    })
    .catch((err) => { console.log(err) })

}
    const changePass=()=>{
        if(pass===cpass){
        axios.post('http://localhost:5000/ChangePass',
      {
        myEmail,
        pass,
        cpass
      }
    )
    .then((data) => {
      console.log(data);
      if (data.data.status === 'ok') {
        navigate(`/`)
      } else {
        alert("Invalid Asserts ");
      }
    })
    .catch((err) => { console.log(err) })
    }
}
  return (
    <div>
      <div className='login'>
    <img className='logo' src={logo} alt="Logo" height={"70px"} width={"70px"}/>
    <p className='title'>DIGITAL ASSEST MANAGEMENT SYSTEM</p>
      <Link to="/"><img className='img3' src={logout}></img></Link>
    </div>
    <h1 id="changepass">Change Your Password</h1>
    <div className='forgetpass'>
        <input  placeholder='Enter your mail' onChange={(e) => setMyEmail(e.target.value)} name='password'></input>
        <br></br>
        <input  placeholder='Enter known password' onChange={(e) => setKnownPass(e.target.value)} name='password'></input>
        <br></br>
        <button onClick={validatePass}>Proceed to change password</button>
        <br></br>
        {
            flag &&
            <>
            <input  placeholder='Enter new password' onChange={(e) => setPass(e.target.value)} name='password'></input>
            <br></br>
         <input  placeholder='Enter confirm password' onChange={(e) => setcPass(e.target.value)} name='password'></input> 
         <br></br>
         <button onClick={changePass}>change password</button>
         </>
        }
        </div>
    </div>
  )
}

export default ForgetPass