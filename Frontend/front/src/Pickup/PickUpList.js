import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminHeader from '../Head&Foot/AdminHeader';
import AdminDrugservice from '../Services/AdminDrugservice';
import "../Style/pick.css"

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

 
  const handleDelete = (id) => {
    console.log('Printing id', id);
  AdminDrugservice.deletepickupitem(id)
      .then(response => {
        console.log('drug deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  return (
    <div><AdminHeader/>
    <div className="container " id='spafromnav'>
    <h1 className='text-center' >Pickup Section</h1>
     
      
      <div>
      
        <table className="table table-bordered table-striped">
          <thead className="thead-dark  tback">
            <tr>
            <th>Doctor Name</th>
              <th>Drug Name</th>
              <th>Drug Price</th>
              <th>Actions</th>
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
               
                <button className="btn btn-info conp" onClick={() => {
                    handleDelete(order.id);
                  }}><i className="fa fa-check che" aria-hidden="true"></i>Confirm</button>
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
