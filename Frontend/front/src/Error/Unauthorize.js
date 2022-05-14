import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../Style/Login/401error.gif'
import "../Style/unauthorize.css"
function Unauthorize(props) {
    return (
        <div>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arvo" />
        
            <img src={pic} className="rounded mx-auto d-block "/>
            <div className="container">
            <div className="row"> 
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="contant_box_404">
                    <h3 className="h2 ">
                     Unauthorize: Access is denied
                    </h3>
                    <p>You do not have permission to view this directory or page using the
credentials that you supplied.</p>
             <h3 className="h2 ">
                   Login as
                    </h3>
                    <Link to={"/admin"} className="link_404 lin ">Admin</Link>
                    <Link to={"/Doctor"} className="link_404 lin">Doctor</Link>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
        </div>
    );
}

export default Unauthorize;