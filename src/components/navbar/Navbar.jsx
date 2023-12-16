import React, {useState} from "react";
import './Navbar.css'
import {
    Link
  } from "react-router-dom";
import navbarLogo from "../../assets/Logo.png"
import { FaBars } from 'react-icons/fa';
import {ImCross} from 'react-icons/im'

const Navbar = () => {

    const [Mobile, setMobile] = useState(false);

    return (
        <>
         <div className= "header header-bg">
          <img src={navbarLogo} class="h-34 w-34 mt-4" className="logo" alt="logo tailus" />

         <div className="nav-bar navbar-bg ">  
             <ul className={Mobile ? "nav-links-mobile" : "nav-menu"} onClick={() => setMobile(false)}>
                 
                 <li class="block h-16 leading-[4rem] font-['Inter'] border-b-2 border-transparent uppercase">
                     <Link to="/">Services</Link>
                 </li>
                 <li class="block h-16 leading-[4rem] font-['Inter'] border-b-2 border-transparent uppercase" >
                     <Link to="#">About Us </Link>     
                 </li >
                 <li class="block h-16 leading-[4rem] font-['Inter'] border-b-2 border-transparent uppercase">
                     <Link to="#">Contact Us</Link>
                 </li>
                 <li class="block h-16 leading-[4rem] font-['Inter'] border-b-2 border-transparent uppercase">
                     <Link to="#">Careers</Link>
                 </li>
             </ul>

             <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}> 
                 {Mobile? <ImCross/> : <FaBars/>} 
             </button>
         </div>  
 </div>
        </>
    )
}

export default Navbar;