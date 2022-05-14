import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DoctoHeader from '../Head&Foot/DoctorHeader';
import AdminDrugservice from '../Services/AdminDrugservice';
import "../Style/DocPickUpList.css"
import pic from '../Style/Login/paytm.png'

const PickUpList = () => {

  const [orders, setorders] = useState([]);
  const [SearchByname,setSearchByName] = useState('');

  const init = () => {
   AdminDrugservice.PickUpList()
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
    <div id='bg13'></div>
    <div className="container " id='spafromnav'>
    <h1 className='text-center dp' >Buy</h1>
     
      
      <div>
      
        <table className="table table-bordered table-striped">
          <thead className="thead-dark  tback">
            <tr>
            <th>Doctor Name</th>
              <th>Drug Name</th>
              <th>Drug Price</th>
              <th>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
          {
            orders.map(order => (
              <tr key={order.id}>
                  <td>{order.drname}</td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>
                <Link className="btn btn-info pa" to={`/pay`}><img src={pic} className="payt "/></Link>
                <Link className="btn btn-info sbr" to={`/stripe/pay`}><i className="fa fa-cc-stripe str"></i></Link>
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

export default PickUpList;
