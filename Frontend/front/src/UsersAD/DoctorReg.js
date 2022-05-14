import React from 'react';
import Drugservice from '../Services/AdminDrugservice';
import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";


const DoctoReg = () => {
    const[name, setname] = useState('');
    const[contact, setcontact] = useState('');
    const[email, setemail] = useState('');
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');
    const {id} = useParams();
let navigate=useNavigate();
    const regAdmin = (e) => {
        e.preventDefault();
        
        const doctordata = {name, contact, email,username,password};
      
       
            //create
            Drugservice.DoctorRegister(doctordata)
            .then(response => {
                console.log("Admin register successfully", response.data);
                navigate("/doctor");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        
    }

   
    return(
        <div className='loginform'>
      <div id="bg9"></div>
      <form className='f1'>
      
         <p className="h1 text-center mb-4 "></p>
         <div className='form-field '></div> 
          <div className='form-field '></div> 
         
             <div className="form-field">
   <input   onChange={(e) => setname(e.target.value)}  id="Doctor Name"  value={name} placeholder=" Enter Your Name" type="text" />
         </div>

         <div className="form-field">
   <input  onChange={(e) => setcontact(e.target.value)}  id=" Doctor contact"  value={contact} type="contact" placeholder="Enter Contact Number" />                         </div>
 
 
   <div className="form-field">
   <input  onChange={(e) => setemail(e.target.value)}   id="email"    value={email} type="email" placeholder="Enter Email Address" />                         </div>
 
 
   <div className="form-field">
   <input  onChange={(e) => setusername(e.target.value)}    id="username"    value={username}  type="text"  placeholder="Enter username" />                         </div>
 
   <div className="form-field">
   <input    onChange={(e) => setpassword(e.target.value)}    id="password"     value={password}  type="password"   placeholder="Enter password" />                         </div>
   
   <div className="form-field">
   <button className="btn" onClick={(e) => regAdmin(e)} type="submit">Register</button>
 </div>
 
         </form>
          
          
        </div>
    )
}

export default DoctoReg;