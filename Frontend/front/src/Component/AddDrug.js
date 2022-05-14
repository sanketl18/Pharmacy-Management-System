import { useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Drugservice from "../Services/AdminDrugservice";
import HeadeComponent from "./AdminHeadercom";
import AdminHeader from "../Head&Foot/AdminHeader";
import "../Style/Adddrug.css"


const AddDrug = () => {
    const[name, setname] = useState('');
    const[price, setprice] = useState('');
    const[type, settype] = useState('');
    const[category, setcategory] = useState('');
    const {id} = useParams();
let navigate=useNavigate();
    const saveDrug = (e) => {
        e.preventDefault();
        
        const drug = {name, price,type,category, id};
        if (id) {
            //update
            Drugservice.updateDrug(drug)
                .then(response => {
                    console.log('Drug data updated successfully', response.data);
                    navigate("/list");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            Drugservice.addDrug(drug)
            .then(response => {
                console.log("drug added successfully", response.data);
                navigate("/list");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
           Drugservice.findbyid(id)
                .then(drug => {
                    setname(drug.data.name);
                    setprice(drug.data.price);
                    settype(drug.data.type);
                    setcategory(drug.data.category);
                    
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div ><AdminHeader/>
        <div id="bg5"></div>
        <div className="container text-center" id="spafromnav "  >
            <h3 className="h1 ads">Add Drug</h3>
            
            <form className="cl" >
               
             
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="drug name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Enter Drug Name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4 supp"
                        id="price"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="Enter Drug Price"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="type"
                        value={type}
                        onChange={(e) => settype(e.target.value)}
                        placeholder="Enter Drug type"
                    />

                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4 supp"
                        id="category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        placeholder="Enter Drug category"
                    />

                </div>
                
                <div className="btad">
                    <button onClick={(e) => saveDrug(e)} className="btn btn-primary ">Save</button>
                </div>
            </form>
           <div className="adl">
            <Link to="/list" className="lins ">Back to List</Link>
            </div>
        </div>
        </div>
        
    )
}

export default AddDrug;