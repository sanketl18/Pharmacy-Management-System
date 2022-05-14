import HeadeComponent from "../Component/AdminHeadercom";
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DoctorDrugService from '../Services/DoctorDrugService';
import Footercomponent from "../Component/Footer";
import AdminDrugservice from "../Services/AdminDrugservice";
import AdminHeader from "../Head&Foot/AdminHeader";
import "../Style/Orderlist.css"

const AdminOrderList = () => {

  const [orders, setorders] = useState([]);

  const init = () => {
    AdminDrugservice.viewOrders()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setorders(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {

    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    AdminDrugservice.deleteorder(id)
      .then(response => {
        console.log('order deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }


  return (
    <div><AdminHeader />
      <div className="container " id='spafromnav'>
        <h3 className='text-center'>Orders</h3>

        <div>

          <table className="table table-bordered table-striped">
            <thead className="thead-dark  tback">
              <tr>
                <th>Doctor Name</th>
                <th>Drug Name</th>
                <th>Drug Price</th>
                <th>Drug Type</th>
                <th>Drug Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.doctor}</td>
                    <td>{order.name}</td>
                    <td>{order.type}</td>
                    <td>{order.category}</td>
                    <td>{order.price}</td>
                    <td>
                      <Link className="btn btn-info ver" to={`/Pickup/${order.id}`}>Verify</Link>
                      <button className="btn btn-danger ml-2 odel" onClick={() => { handleDelete(order.id); }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div>
        </div>
      </div>

    </div>
  );
}

export default AdminOrderList;
