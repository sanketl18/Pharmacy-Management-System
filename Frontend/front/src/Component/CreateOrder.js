import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../Style/createorder.css"

import DoctorDrugService from "../Services/DoctorDrugService";
import DoctorHeadeComponent from "./DoctorHeader";
import DoctoHeader from "../Head&Foot/DoctorHeader";

const CreateOrder = () => {
    const [doctor, setdrname] = useState('');
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [type, settype] = useState('');
    const [category, setcategory] = useState('');
    const { id } = useParams();
    let navigate = useNavigate();
    const saveDruginorder = (e) => {
        e.preventDefault();

        const order = { doctor, name, price, type, category, id };
        if (id) {
            DoctorDrugService.addDruginorder(order)
                .then(response => {
                    console.log("drug added successfully", response.data);
                    navigate("/orderlist");
                })
                .catch(error => {
                    console.log('something went wroing', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            DoctorDrugService.findbyid(id)
                .then(order => {

                    setname(order.data.name);
                    setprice(order.data.price);
                    settype(order.data.type);
                    setcategory(order.data.category)

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div><DoctoHeader/>
        <div id="bg12"></div>
            <div className="container  text-center" id='spafromnav'>
                <h3 className="ch fw-bold">Create Order</h3>
              
                <form className="crorder" >
                    <div className="form-group text-center sin">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="Doctor Name"
                            value={doctor}
                            onChange={(e) => setdrname(e.target.value)}
                            placeholder="Enter name"
                            required />
                    </div>

                    <div className="form-group text-center sin">
                        <li className="form-control col-4">
                            {name}
                        </li>
                    </div>

                    <div className="form-group text-center sin">
                        <li className="form-control col-4">
                            {price}
                        </li>
                    </div>

                    <div className="form-group text-center sin">
                        <li className="form-control col-4">
                            {type}
                        </li>
                    </div>

                    <div className="form-group text-center sin">
                        <li className="form-control col-4">
                            {category}
                        </li>
                    </div>

                    <div >
                        <button onClick={(e) => saveDruginorder(e)} className="btn btn-primary">Confirm details</button>
                    </div>
                </form>
                
                <Link to="/list" className="cba">Back to List</Link>
            </div>
        </div>
    )
}

export default CreateOrder;