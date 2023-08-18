import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import home from "../images/icons/home.png"
import logout from "../images/icons/logout.png"
function UpdateAssert() {
  const params = useParams();
  const email = params.email;
  const ind = params.ind;
  const [title, setTitle] = useState(params.title);
  const [quantity, setQuantity] = useState(params.quantity);
  const [price, setPrice] = useState(params.price);
  const [asserts, setAsserts] = useState(params.asserts);
  const category = ['Monitor', 'CPU', 'Printer', 'KeyBoard', 'Mouse', 'Pendrive', 'Projector', 'Software Equipments'];

  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/UpdateAsserts',
      {
        title,
        asserts,
        quantity,
        price,
        email,
        ind
      }
    )
      .then((data) => {
        console.log(data);
        if (data.data.status === 'ok') {
          navigate(`/Home/${email}`)
        } else {
          alert("Update failed");
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
        <input id='title' placeholder='Enter Reason for the product' value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label htmlFor="category">Category :</label>
        <select className='select-box1' value={asserts} onChange={(e) => { setAsserts(e.target.value) }}>
          {
            category.map((item, ind) => {
              return (<option key={ind} value={item}>{item}</option>)
            })
          }
        </select>
        <label htmlFor="Quantity">Quantity :</label>
        <input id='Quantity' placeholder='Enter quantity of product' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
        <label htmlFor="price">Price :</label>
        <input id='price' placeholder='Enter price of per product' value={price} onChange={(e) => setPrice(e.target.value)}></input>
        <button >Update Asserts</button>
      </form>
      </div>
    </div>
  )
}

export default UpdateAssert