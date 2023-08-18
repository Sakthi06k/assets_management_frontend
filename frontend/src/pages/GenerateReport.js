import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import logo from '../images/logo.png'
import home from "../images/icons/home.png"
import logout from "../images/icons/logout.png"
function GenerateReport() {
    const { email } = useParams();
    const category = ['Monitor', 'CPU', 'Printer', 'KeyBoard', 'Mouse', 'Pendrive', 'Projector', 'Software Equipments'];
    const [asserts, setAsserts] = useState([]);
    const [qty,setQty] = useState([]);
    const [price,setPrice] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/GenerateReport/${email}`)
            .then((data) => {
                console.log(data);
                if (data.data.status === 'ok') {
                    setAsserts(data.data.userDetials.asserts)
                } else {
                    alert(" failed");
                }
            })
            .catch((err) => { console.log(err) })
    }, [])
    useEffect(() => {
        const qty = [0, 0, 0, 0, 0, 0, 0, 0]
        const price = [0, 0, 0, 0, 0, 0, 0, 0]
        asserts.forEach((ele)=>{
            console.log(ele);
            if (ele.asserts == 'Monitor') {
                qty[0]+=parseInt(ele.quantity);
                price[0]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'CPU') {
                qty[1]+=parseInt(ele.quantity);
                price[1]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'Printer') {
                qty[2]+=parseInt(ele.quantity);
                price[2]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'KeyBoard') {
                qty[3]+=parseInt(ele.quantity);
                price[3]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'Mouse') {
                qty[4]+=parseInt(ele.quantity);
                price[4]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'Pendrive') {
                qty[5]+=parseInt(ele.quantity);
                price[5]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'Projector') {
                qty[6]+=parseInt(ele.quantity);
                price[6]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
            if (ele.asserts == 'Software Equipments') {
                qty[7]+=parseInt(ele.quantity);
                price[7]+=parseInt(ele.price) * parseInt(ele.quantity);
            }
        })
        setQty(qty)
        setPrice(price)
    }, [asserts])


    return (
        <div>
             <div className='login'>
    <img className='logo' src={logo} alt="Logo" height={"70px"} width={"70px"}/>
    <p className='title'>DIGITAL ASSEST MANAGEMENT SYSTEM</p>
      <Link to={`/Home/${email}`}><img className='img1' src={home}></img></Link>
      <Link to="/"><img className='img3' src={logout}></img></Link>
    </div>
    <div className='mid'>
            <h1>General Report</h1>
            <div className='tablediv'>
            <table className='maintable' >
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map((ele, ind) => {
                            return (
                                <tr className='grey' key={ind}>
                                    <td>{ele}</td>
                                    <td>{qty[ind]}</td>
                                    <td>{price[ind]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default GenerateReport


