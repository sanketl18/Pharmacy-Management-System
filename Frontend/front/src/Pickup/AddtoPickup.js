import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import AdminDrugservice from "../Services/AdminDrugservice";
import AdminHeader from "../Head&Foot/AdminHeader";
import "../Style/Addtopickup.css"
const AddtoPickup = () => {
    const [drname, setdrname] = useState('');
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const { id } = useParams();
    let navigate = useNavigate();
    const saveOrderToPickup = (e) => {
        e.preventDefault();

        const order = { drname, name, price, id };
        if (id) {
            AdminDrugservice.addtopickup(order)
                .then(response => {
                    console.log("added successfully", response.data);
                    navigate("/pickuplist");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            AdminDrugservice.orderById(id)
                .then(order => {
                    setdrname(order.data.doctor);
                    setname(order.data.name);
                    setprice(order.data.price);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

  
    return (
        <div><AdminHeader/>
         <div id="bg7"></div> 
         <div className="container " id='spafromnav'>
            <h3 className="api">Add to PickUp</h3>
           
            <form>
                <div className="form-group ">
                
            <li className="form-control col-4 supp ">{drname} </li>
                </div>
                <div className="form-group ">
                
                <li className="form-control col-4 supp  ">{name} </li>
                    </div>
                    <div className="form-group ">
                
                <li className="form-control col-4 supp ">{price} </li>
                    </div>
                <div >
                    <button onClick={(e) => saveOrderToPickup(e)} className="btn btn-primary">Confirm</button>
                </div>
            </form>
           
           
        </div>    

        </div>

    )
}

export default AddtoPickup;