import { Link } from "react-router-dom"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
          <h1><Link to={"/"} className="navbar-brand animate-charcter"> S-Pharmacist.in</Link></h1>
        </div>

<div id="menu-outer">
<div className="table"  id='bs-example-navbar-collapse-1'>
    <ul id="horizontal-list" >
            <li >
              <a href='#about' className='page-scroll deco h3 ' style={{color:"black"}} >
              <span className="navhh">  Login</span>
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll deco h3'style={{color:"black"}}>
              <span className="navhh">Services</span>
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll deco h3' style={{color:"black"}}>
              <span className="navhh"> Gallery</span>
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll deco h3' style={{color:"black"}}>
              <span className="navhh"> Testimonials</span>
              </a>
            </li>
          
           
            <li>
              <a href='#contact' className='page-scroll deco' style={{color:"black"}}>
              <span className="navhh">  Contact </span>
              </a>
            </li>
          </ul>
        </div>
        </div>
        
        </div>
    </nav>
  )
}
