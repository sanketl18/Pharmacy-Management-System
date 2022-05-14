import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminHeader from '../Head&Foot/AdminHeader';
import Drugservice from '../Services/AdminDrugservice';
import HeadeComponent from './AdminHeadercom';
import Footercomponent from './Footer';

import "../Style/Supplier.css"
import "../Style/DrugList.css"
import pic from '../Style/Login/del.png'

const SupplierList = () => {
  
  const [suppliers, setsupplier] = useState([]);
  const [SearchByname,setSearchByName] = useState('');

  const init = () => {
   Drugservice.viewSupplier()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setsupplier(response.data);
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
  Drugservice.deleteSupplier(id)
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
      <h3 className='text-center'>List of suppliers</h3>
<div className='sup'>
      <input className='Drugli '  type="text" placeholder="search " onChange={e=>setSearchByName(e.target.value)} 
size="60" height="100"  />  
     </div>
      
<div className="container">
    <div className="row">
        <div className="col-sm-3">
            <a href="/supplier/add" className="add btn-lg">
                <span>Add Supplier</span>
            </a>
        </div>
    </div>
</div>

      <div>
        <table className="table table-bordered table-striped t">
          <thead className="thead-dark tback">
            <tr>
              <th> Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Drug Name</th>
              <th>Drug Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
           suppliers.filter((supplier)=>{
            if(SearchByname==""){
              return supplier
            }
            else if(supplier.name.toLowerCase().includes(SearchByname.toLowerCase())){
              return supplier
            }
          }).map(supplier => (
              <tr key={supplier.id}>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.phoneNumber}</td>
                <td>{supplier.drugName}</td>
                <td>{supplier.drugPrice}</td>
                <td>

                <button className="btn btn-danger ml-2 bds" onClick={() => {
                    handleDelete(supplier.id);
                  }}><img src={pic} className="sdel "/></button>
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

export default SupplierList;
