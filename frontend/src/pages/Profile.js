import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import home from "../images/icons/home.png"
import logout from "../images/icons/logout.png"
function Profile() {
  const params = useParams();
  const navigate = useNavigate();
  const [firstname,setFirstname] = useState(params.firstname);
  const [lastname,setLastname] = useState(params.lastname);
  const [email,setEmail] = useState(params.email);
  const [pass,setPass] = useState("");

  const totalAsserts = 0;
const modifyChanges = ()=>{
  axios.post(`http://localhost:5000/Profile/${params.email}`,
      {
        firstname,
        lastname,
        email,
        pass
      }
    )
    .then((data) => {
      console.log(data);
      if (data.data.status === 'ok') {
        navigate(`/Home/${email}`)
        alert("modified successfully")
      } else {
        alert("Wrong password");
      }
    })
    .catch((err) => { console.log(err) })

}
  return (
    <div>
      <div className='login'>
    <img className='logo' src={logo} alt="Logo" height={"70px"} width={"70px"}/>
    <p className='title'>DIGITAL ASSEST MANAGEMENT SYSTEM</p>
      <Link to={`/Home/${email}`}><img className='img1' src={home}></img></Link>
      <Link to="/"><img className='img3' src={logout}></img></Link>
    </div>
    <div className='profile'>
        <h1>User Profile</h1>
        <div className='inside'>
        <label for="fname">FirstName :</label>
        <input id='fname' value={firstname} placeholder='Change your firstname' onChange={(e) => setFirstname(e.target.value)} name='fname'></input>
        <br></br>
        <label for="lname">LastName :</label>
        <input id='lname' value={lastname} placeholder='Change your lastname' onChange={(e) => setLastname(e.target.value)} name='lname'></input>
        <br></br>
        <label for="email">Email :</label>
        <input className='b' type='email' value={email} id='email' placeholder='Change your email' onChange={(e) => setEmail(e.target.value)} name='email'></input>
        <br></br>
        <label for="pass">Enter password to update :</label>
        <input className='a' type='password' id='pass' placeholder='Enter your password' onChange={(e) => setPass(e.target.value)} name='pass'></input>
        <br></br>
        <button id='upd' onClick={modifyChanges}>Update Changes</button>
        </div>
    </div>
    </div>
  )
}

export default Profile