import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminAuthService from '../Services/adminAuthService';
import "../Style/AdminHomePage.css"

 function AdminHomePage(props) {
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    const user =AdminAuthService.getCurrentUser();
 
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AdminAuthService.logout();
  };
     return (
         <>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top fixed-top'>
        <div className='container'>  
          <div className='navbar-header'>
            <h1><Link to={"/Adminhome"} className="navbar-brand animate-charcter"> S-Pharmacist.in</Link></h1>
          </div>
  
  <div id="menu-outer">
  <div className="table"  id='bs-example-navbar-collapse-1'>
      <ul id="horizontal-list" >
              
              <li>
                <a href='/list' className='page-scroll deco h3 admh'style={{color:"black"}}>
                <span  className="navhh">  Drugs </span>
                </a>
              </li>
              <li>
                <a href='/supplier/list' className='page-scroll deco h3 admh' style={{color:"black"}}>
                 <span className="navhh">Supplier</span>
                </a>
              </li>
              <li>
                <a href='/admin/orderlist' className='page-scroll deco h3 admh' style={{color:"black"}}>
                 <span className="navhh"> Orders</span>
                </a>
              </li>
              <li >
                <a href='/chat' className='page-scroll deco h3 admh' style={{color:"black"}} >
                <span className="navhh">  Support</span>
                </a>
              </li>
              <li >
                <a href='/admin/reg' className='page-scroll deco h3 admh ' style={{color:"black"}} >
                <span className="navhh">  Add user</span>
                </a>
              </li>
              <li>
              {currentUser ? (
                <a href='/' className='page-scroll deco' style={{color:"black"}} onClick={logOut}>
                <span className="navhl"> Logout </span>
                </a>
                 ) 
                 : (
                  <a href='/admin' className='page-scroll deco' style={{color:"black"}}>
                <span className="navhl"> Login </span> 
                 </a>
                  )
                }
              </li>
            </ul>
          </div>
          </div>
          
          </div>
      </nav>
      <div id="bg3"></div>
      <div className='we'>
      <h1 className='hea'>
  <span className='sp'>Welcome Admin, let's manage</span>
  <div class="message">
    <div class="word1">Drugs</div>
    <div class="word2">Suppliers</div>
    <div class="word3">Orders</div>
  </div>
</h1>
</div>

      {/*<div className='imgd'>
      <img src={pic} className="rounded mx-auto d-block img-fluid "/>
              </div>*/}
      </>
     );
 }
 
 export default AdminHomePage;