import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DoctorAuthServiec from '../Services/DoctorAuthServiec';

import "../Style/DocHome.css"

 function DocHomePage(props) {
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    const user =DoctorAuthServiec.getCurrentUser();
 
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    DoctorAuthServiec.logout();
  };
     return (
         <>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top fixed-top'>
        <div className='container'>  
          <div className='navbar-header'>
            <h1><Link to={"/Dochome"} className="navbar-brand animate-charcter"> S-Pharmacist.in</Link></h1>
          </div>
  
  <div id="menu-outer">
  <div className="table"  id='bs-example-navbar-collapse-1'>
      <ul id="horizontal-list" >
              
              <li>
                <a href='/dlist' className='page-scroll deco h3 doch'style={{color:"black"}}>
                 <span  className="navhh"> Drugs </span>
                </a>
              </li>

              <li>
                <a href='' className='page-scroll deco h3 doch' style={{color:"black"}}>
                <span className="navhh">  Cart </span>
                </a>
              </li>

              <li>
                <a href='/chat' className='page-scroll deco h3 doch' style={{color:"black"}}>
                <span className="navhh"> Support </span> 
                </a>
              </li>
              <li>
              {currentUser ? (
                <a href='/' className='page-scroll deco' style={{color:"black"}} onClick={logOut}>
               <span className="navhl">  Logout </span>
                </a>
                 ) 
                 : (
                  <a href='/admin' className='page-scroll deco' style={{color:"black"}}>
                <span className="navhl">  Login </span>
                 </a>
                  )
                }
              </li>
            </ul>
          </div>
          </div>
          
          </div>
      </nav>
      <div id="bg6"></div>

      <div className='dob'>
      <h1 className='hdd'>
        <div>
      <span className='a1'>Welcome</span>
  <span className='a2'>Doctor</span>
  </div>
  <span className='a3'>S-pharmacist</span>
  <span  className='a4'> better</span>
  <span className='a5'>way</span>
  <span className='a6'> to</span>
  <span className='a7'>shop</span>
  <span className='a8'>for</span>
  <span className='a9'>health</span>
  <span className='a10'>and</span>
  <span className='a11'>beauty</span>
</h1>
</div>
             
      {/*<div className='imgd'>
      <img src={pic} className="rounded mx-auto d-block img-fluid "/>
              </div>*/}
      </>
     );
 }
 
 export default DocHomePage;