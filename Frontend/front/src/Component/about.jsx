import { Link } from "react-router-dom";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Login</h2>
              <p>
              <h1><Link to={"/admin"} className="deco "><span className="frontAd">Admin</span></Link></h1>
              <h1><Link to={"/doctor"} className="deco"><span className="frontAd">Doctor</span></Link></h1>
              </p>
              <h3 >Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-6 col-xs-12">
                  <ul className="why">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
