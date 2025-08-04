import React, { useState } from 'react'
import './Navbar.css'
import { asserts } from '../../assets/asserts'
const Navbar = () => {

     const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={asserts.logo} alt="" className='logo'/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Products</li>
            <li onClick={()=>setMenu("farms")} className={menu==="farms"?"active":""}>Farms</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={asserts.search} alt="" className='sear'/>
            <div className="navbar-search-icon">
                <img src={asserts.shoppingcart} alt="" className='cart'/>
                <div className='dot'></div>
            </div>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar