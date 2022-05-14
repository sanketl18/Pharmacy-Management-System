import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DoctoHeader from '../Head&Foot/DoctorHeader';
import DoctorDrugService from '../Services/DoctorDrugService';
import "../Style/Orderlist.css"

const OrderList = () => {

  const [orders, setorders] = useState([]);
  const [SearchByname,setSearchByName] = useState('');

  const init = () => {
   DoctorDrugService.orderlist()
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

 

  return (
    <div><DoctoHeader/>
    <div className="container " id='spafromnav'>
    <h1 className='text-center oh' >Orders</h1>
     
      
      <div>
      
        <table className="table table-bordered table-striped">
          <thead className="thead-dark  tback">
            <tr>
            <th>Doctor Name</th>
              <th>Drug Name</th>
              <th>Drug Type</th>
              <th>Drug Category</th>
              <th>Drug Price</th>
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

export default OrderList;
