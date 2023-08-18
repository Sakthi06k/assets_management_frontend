import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import home from "../images/icons/home.png"
import logout from "../images/icons/logout.png"
function AddAsserts() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [asserts, setAsserts] = useState("Monitor");
  const category = ['Monitor', 'CPU', 'Printer', 'KeyBoard', 'Mouse', 'Pendrive', 'Projector', 'Software Equipments'];
  const { email } = useParams();
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/AddAsserts',
      {
        title,
        asserts,
        quantity,
        price,
        email
      }
    )
    .then((data) => {
      console.log(data);
      if (data.data.status === 'ok') {
        navigate(`/Home/${email}`)
      } else {
        alert("Invalid Asserts ");
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
    <div className='addasset'>

      <h1>Enter your Data</h1>
      <form onSubmit={add}>
        <label htmlFor="title">Title :</label>
        <input id='title' placeholder='Enter Reason for the product' onChange={(e) => setTitle(e.target.value)}></input>
        <br></br>
        <label htmlFor="category">Category :</label>
        <select className='select-box1' onChange={(e) => { setAsserts(e.target.value) }}>
          {
            category.map((item,ind) => {
              return (<option key={ind} value={item}>{item}</option>)
            })
          }
        </select>
        <br></br>
        <label htmlFor="Quantity">Quantity :</label>
        <input id='Quantity' placeholder='Enter quantity of product' onChange={(e) => setQuantity(e.target.value)}></input>
        <br></br>
        <label htmlFor="price">Price :</label>
        <input id='price' placeholder='Enter price of per product' onChange={(e) => setPrice(e.target.value)}></input>
        <br></br>
        <button >Add Asserts</button>
      </form>
      </div>
    </div>
  )
}

export default AddAsserts