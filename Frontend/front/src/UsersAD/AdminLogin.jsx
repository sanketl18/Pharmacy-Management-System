import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AdminAuthService from '../Services/adminAuthService';

import "../Style/Login.css";


function Admin() {
 
    const[data,setData]=useState({
        username:"",
        password:""
    })
  
    const navigate =  useNavigate();
   const jwt= localStorage.getItem("SavedToken")
    const handleLogin = async  (e)=>{
        e.preventDefault();
        try{
            await AdminAuthService.login(data.username,data.password).then(
                ()=>{
                    navigate("/Adminhome");
                    window.location.reload();
                   
                },
                (error)=>{
                    console.log(error);
                    alert("incorrect credentials");
                }
               
            )
        }
        catch(err){
            console.log(err);
        }
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
    }
  return (
  <React.Fragment>
      <div className='loginform'>
      <div id="bg"></div>
          <form onSubmit={handleLogin}>
         
          <p className="h1 text-center mb-4 ">Log in</p>
              <div className="form-field l1">
    <input  onChange={(e)=>handle(e)} id="username" value={data.username} placeholder='username' type="text" />
          </div>

          <div className="form-field">
    <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" placeholder="Password" />                         </div>
  
    <div className="form-field">
    <button className="btn" type="submit">Log in</button>
  </div>
          </form>
      </div>

     
      
  </React.Fragment>
)
}

export default Admin;