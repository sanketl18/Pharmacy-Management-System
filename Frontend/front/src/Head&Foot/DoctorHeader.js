import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../Head&Foot/DocHead.css"
import DoctorAuthServiec from '../Services/DoctorAuthServiec';
function DoctoHeader(props) {
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
      <div className='AdmBody'>
          <nav  className='fnav'>
 <a href="/Dochome">Home</a>
  <a href="/dlist">Drug</a>
 <a href="/orderlist">Cart</a>
 <a href="/Docpickuplist">PickUp</a>
 <div className="animation start-home"></div>

</nav>

      </div>
      
      </>
    );
}

export default DoctoHeader;