import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import DoctorAuthServiec from '../Services/DoctorAuthServiec';
import "../Style/Login.css";

function Doctor() {
 
    const[data,setData]=useState({
        username:"",
        password:""
    })
  
    const navigate =  useNavigate();
  
    const handleLogin = async  (e)=>{
        e.preventDefault();
        try{
            await DoctorAuthServiec.login(data.username,data.password).then(
                ()=>{
                    navigate("/Dochome");
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
                <div className="form-field">
      <input  onChange={(e)=>handle(e)} id="username" value={data.username} placeholder='username' type="text" required/>
            </div>
  
            <div className="form-field">
      <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" placeholder="Password" required/>                         </div>
    
      <div className="form-field">
      <button className="btn" type="submit">Log in</button>
    </div>
    <div class="text-center">
        <h3><Link to={"/doctor/reg"} className="text-white "> Not a user? Register</Link></h3>
    
     </div>
               {/*} <input onChange={(e)=>handle(e)} id="username" value={data.username} placeholder='username' type="text"/>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='password' type="text"/>
                <button type="submit">Log in</button>*/}
  
            </form>
        </div>
  
       
        
    </React.Fragment>
  )
  }
  
  export default Doctor;