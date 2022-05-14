import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DoctoHeader from '../Head&Foot/DoctorHeader';
import DoctorDrugService from '../Services/DoctorDrugService';
import "../Style/DocDrugli.css"
const DocDrugli = () => {

  const [drugs, setdrug] = useState([]);
  const [SearchByname,setSearchByName] = useState('');

  const init = () => {
   DoctorDrugService.viewAllDrugs()
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

  

  return (
    <div><DoctoHeader/>
    <div className="container " >
    <h1 className="text-center spafromnav" >Available Drugs</h1>
     
      <div className='inputc'>
<input className='Drugli dod' type="text" placeholder="seach " onChange={e=>setSearchByName(e.target.value)} 
size="60" height="100" /></div>
      <div>
      
        <table className="table table-bordered table-striped">
          <thead className="thead-dark tback">
            <tr>
              <th>Drug Name</th>
              <th>Drug Price</th>
              <th>Drug Category</th>
              <th>Drug Type</th>
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
                <td>{drug.type}</td>
                <td>{drug.category}</td>
                <td>{drug.price}</td>
                <td>
                <Link className="btn btn-info sbc" to={`/order/${drug.id}`}><i className="fa fa-shopping-cart cart"></i></Link>
         
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

export default DocDrugli;
