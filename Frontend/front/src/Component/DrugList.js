import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Drugservice from '../Services/AdminDrugservice';

import AdminHeader from '../Head&Foot/AdminHeader';
import "../Style/DrugList.css"
const DrugList = () => {
  
  const [drugs, setdrug] = useState([]);
  const [SearchByname,setSearchByName] = useState('');

  const init = () => {
   Drugservice.viewAllDrugs()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setdrug(response.data);
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
  Drugservice.deleteDrugs(id)
      .then(response => {
        console.log('drug deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
   <div> <AdminHeader/>
    <div className="container" id='spafromnav'>
    <div className='inputc'>
      <h1 className='text-center' >List of Drug</h1>
     
      <input className='Drugli'  type="text" placeholder="search " onChange={e=>setSearchByName(e.target.value)} 
size="60" height="100"  />  

<div className="container ">
    <div className="row">
        <div className="col-sm-3">
            <a href="/add" className="add btn-lg">
                <span>Add Drug</span>
            </a>
        </div>
    </div>
</div>
        <table className="table table-bordered table-striped t">
          <thead className="thead-dark tback">
            <tr>
              <th>Drug Name</th>
              <th>Drug Price</th>
              <th>Drug Type</th>
              <th>Drug Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            drugs.filter((drug)=>{
              if(SearchByname==""){
                return drug
              }
              else if(drug.name.toLowerCase().includes(SearchByname.toLowerCase())){
                return drug
              }
            }).map(drug => (
              <tr key={drug.id}>
                <td>{drug.name}</td>
                <td>{drug.price}</td>
                <td>{drug.type}</td>
                <td>{drug.category}</td>
                <td>
                  <Link className="update"  to={`/drug/edit/${drug.id}`}>
                  <i className="fa fa-edit" />
                   </Link>
                  
                  <button className="btn bt " onClick={() => {
                    handleDelete(drug.id);
                  }}><i className="fa fa-trash delete"></i></button>
               
                
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

export default DrugList;
