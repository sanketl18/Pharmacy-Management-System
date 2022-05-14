import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Drugservice from "../Services/AdminDrugservice";
import HeadeComponent from "./AdminHeadercom";
import AdminHeader from "../Head&Foot/AdminHeader";
import "../Style/Adddrug.css"

const AddSupplier = () => {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[phoneNumber, setphoneNumber] = useState('');
    const[drugName, setdrugName] = useState('');
    const[drugPrice, setdrugPrice] = useState('');
    const {id} = useParams();
let navigate=useNavigate();
    const saveSupplier = (e) => {
        e.preventDefault();
        
        const supplier = {name, email,phoneNumber,drugName,drugPrice, id};
        
            
            Drugservice.AddSupplier(supplier)
            .then(response => {
                console.log("drug added successfully", response.data);
                navigate("/supplier/list");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    

    return(
        <div><AdminHeader/>
        <div id="bg11"></div>
        <div className="container text-center " id='spafromnav'>
            <h3>Add Supplier</h3>
            <hr/>
            <form className="cl" >
                <div className="text-center form-group   ">
                    <input 
                        type="text" 
                        className="form-control col-4 supp "
                        id="Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control col-4 supp"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Enter Email"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4 supp"
                        id="phonenumber"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        placeholder="Enter Mobile Number"
                    />

                </div>

                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="drug name"
                        value={drugName}
                        onChange={(e) => setdrugName(e.target.value)}
                        placeholder="Enter Drug Name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4 supp"
                        id="price"
                        value={drugPrice}
                        onChange={(e) => setdrugPrice(e.target.value)}
                        placeholder="Enter Drug Price"
                    />

                </div>
                
                <div  >
                    <button onClick={(e) => saveSupplier(e)} className="btn btn-primary ">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/supplier/list" className="lins ">Back to List</Link>
        </div>
        </div>
    )
}

export default AddSupplier;