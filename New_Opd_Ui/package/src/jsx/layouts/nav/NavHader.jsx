import React, { useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
/// React router dom
import { Link } from "react-router-dom";
import { navtoggle } from "../../../store/actions/AuthActions";

/// imag
import logo from "../../../assets/images/logo.png";


const NavHader = () => {   
   const dispatch = useDispatch();
   const sideMenu = useSelector(state => state.sideMenu);
   const handleToogle = () => {
     dispatch(navtoggle());
   };
   return (
      <div className="nav-header">
          <Link to="/" className="brand-logo">
         
            <img className="logo-compact" src={logo} alt="" />
            <img className="brand-title" src={logo} alt="" />
         </Link>
         <div className="nav-control" 
            onClick={() => {              
               handleToogle()
            }}
         >
            <div className={`hamburger ${sideMenu ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
