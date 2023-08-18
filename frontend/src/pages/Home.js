import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import home from "../images/icons/home.png"
import logout from "../images/icons/logout.png"
import user from "../images/icons/user.png"
import edit from "../images/icons/edit.png"
import del from "../images/icons/delete.ico"
function Home() {
  const [asserts, setAsserts] = useState([]);
  const [update,setUpdate] = useState(false);
  const [userDetials,setuserDetials] = useState({});
  const { email } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/Home/${email}`)
      .then((data) => {
        if (data.data.status === "ok") {
          setAsserts(data.data.asserts);
        }
        setuserDetials(data.data.userDetials);
      })
  }, [update])
  

  const handleDelet = (id) => {
    axios.delete(`http://localhost:5000/deleteAssert/${id}/${email}`)
    .then((data)=>{
      if(data.data.status === "ok"){
        setUpdate(pre => !pre)
      }
      else{
        alert("delete faild");
      }
    })
  }

  const handleUpdate = (ind,ele) => {
    navigate(`/UpdateAssert/${email}/${ind}/${ele.title}/${ele.asserts}/${ele.quantity}/${ele.price}`)
  }
  return (
    <div>
      <div className='login'>
    <img className='logo' src={logo} alt="Logo" height={"70px"} width={"70px"}/>
    <p className='title'>DIGITAL ASSEST MANAGEMENT SYSTEM</p>
      <Link to={`/Home/${email}`}><img className='img1' src={home}></img></Link>
      <Link to={`/Profile/${userDetials.email}/${userDetials.firstName}/${userDetials.lastName}`}><img className='img2' src={user}></img></Link>
      <Link to="/"><img className='img3' src={logout}></img></Link>
    </div>
    <div className='mid'>
      <h1>Current assests</h1>
      <Link to={`/AddAsserts/${email}`}><button id='addasset'>Add New Asserts</button></Link>
      <div className='tablediv'>
      <table className='maintable' >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {
          asserts && asserts.map((ele,ind) => {
            return(
              <tr className='grey' key={ind}>
                <td>{ind+1}</td>
                <td>{ele.title}</td>
                <td>{ele.asserts}</td>
                <td>{ele.quantity}</td>
                <td>{ele.price}</td>
                <td>{ele.quantity * ele.price}</td>
                <td>
                  <img onClick={()=>{handleUpdate(ind,ele)}} height={30} width={30} src={edit}></img>
                  <img onClick={()=>{handleDelet(ind)}} height={30} width={30} src={del}></img>
                </td>
              </tr>
            )
          })
          }          
        </tbody>
      </table>
      </div>
      <Link className='report' to={`/GenerateReport/${email}`}><button>Generate Report</button></Link>
    </div>
    </div>
  )
}

export default Home