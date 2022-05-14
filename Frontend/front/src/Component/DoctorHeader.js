import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DoctorAuthServiec from '../Services/DoctorAuthServiec';
function DoctorHeadeComponent(props) {
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
          <div>
<header >
<nav className="navbar navbar-expand-md navbar-dark  navbar-default navbar-fixed-top fixed-top " style={{backgroundColor: '#3e4551'}}>
<div ><Link to={"/"} className="navbar-brand "> <h1>S-Pharmacist.in</h1></Link></div>
<div  className='navsp'><Link to={"/home"} className="navbar-brand "><img src={{/*home*/}} alt=""/> <h1>Home</h1></Link></div>
<div className='navsp'><Link to={"/dlist"} className="navbar-brand "> <h1>Drug</h1></Link></div>
<div className='navsp'><Link to={"/orderlist"} className="navbar-brand "> <h1>Cart</h1></Link></div>
<div className='navsp'><Link to={"/Docpickuplist"} className="navbar-brand "> <h1>Pay and PickUp </h1></Link></div>
     {currentUser ? (
         <div className="navbar-nav ms-auto">
          
           <Link to={"/"} className="btn btn-danger" onClick={logOut}><h5>Logout </h5></Link>
            
         
         </div>
       ) 
       : (
         <div className="navbar-nav ms-auto">
          
             <Link to={"/"} className="nav-link">
               Login
             </Link>
          
         </div>
       )
       }
      
     
</nav>
</header>
</div>
      );
  }


export default DoctorHeadeComponent;