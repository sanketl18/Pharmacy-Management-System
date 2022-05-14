import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminAuthService from '../Services/adminAuthService';

import "../Head&Foot/AdmHead.css"
function AdminHeader(props) {
    return (
        <>
      <div className='AdmBody'>
          <nav  className='fnav'>
            
 <a href="/Adminhome" >Home</a>
  <a href="/list">Drug</a>
  <a href="/supplier/list">Supplier</a>
 <a href="/admin/orderlist">Cart</a>
 <a href="/pickuplist">PickUp</a>
 <div className="animation start-home"></div>

</nav>

      </div>
    
      </>
    );
}

export default AdminHeader;