import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import aa from "../images/aa.png"
function LoginReg() {
    const navigate = useNavigate();
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPass,setLoginPass] = useState("");
    const [firstName,setfirstname] = useState("");
    const [lastName,setlastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const [cPassword,setcpassword] = useState("");
    const login = ()=>{
        axios.post('http://localhost:5000/Login',
        {
            loginEmail,
            loginPass
        }
    )
    .then((data)=>{
        if(data.data.status==='ok'){
            alert("correct");
            window.location.href = `/Home/${loginEmail}`
          }else{
             alert("Invalid login");
          }
    })
    .catch((err)=>{console.log(err) })
    }
    const register = ()=>{
        axios.post('http://localhost:5000/Register',
        {
            firstName,
            lastName,
            email,
            password,
            cPassword
        }
    )
    .then((data)=>{
        if(data.data.status==='ok'){
            alert("registered");
          }else{
             alert("Invalid register");
          }
    })
    .catch((err)=>{console.log(err) })

    }
    const forgetPassword = ()=>{
      alert("Enter your known old password")
        navigate(`/ForgetPass`);
    }
    // alert(forgetPass)
  return (
    <>
    <div className='login'>
    <img className='logo' src={logo} alt="Logo" height={"70px"} width={"70px"}/>
    <p className='title'>DIGITAL ASSEST MANAGEMENT SYSTEM</p>
    
        <label className='loginemail' for="loginemail">Email :</label>
        <input required id='loginemail' placeholder='Enter registered email' onChange={(e) => setLoginEmail(e.target.value)} name='email'></input>
        <label className='loginpass' for="loginpass">Password :</label>
        <input required type='password' id='loginpass' placeholder='Enter registered password' onChange={(e) => setLoginPass(e.target.value)} name='password'></input>
        <button className='loginbtn' onClick={login}>Login</button>
        <a href='#' onClick={forgetPassword}>Forget password</a>
  
    </div>
    <hr></hr>
    <div className='register'>
        <img src={aa} id='aa' height={"455px"} width={"540px"}></img>
        <div className='bottom'>
        <p id='signup'>Sign Up</p>
        <input required id='firstname' placeholder='Enter firstname' onChange={(e) => setfirstname(e.target.value)} name='firstname'></input>
        <br></br>
        <input required id='lastname' placeholder='Enter lastname' onChange={(e) => setlastname(e.target.value)} name='lastname'></input>
        <br></br>
        <input required id='email' type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} name='email'></input>
        <br></br>
        <input required id='regpass' placeholder='Create password' onChange={(e) => setpassword(e.target.value)} name='regpass'></input>
        <br></br>
        <input required id='cpass' placeholder='Confirm password' onChange={(e) => setcpassword(e.target.value)} name='cpass'></input>
        <br></br>
        <button id='registerbtn' onClick={register}>Create Account</button>
        </div>
        <span id="footer">&#169; 2023 <a href ="http://sakthiportfolio.lovestoblog.com/?i=1">My portfolio</a></span>
    </div>
    </>
  )
}

export default LoginReg