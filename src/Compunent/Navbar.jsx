import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'

const Navbar = () =>{


    return(
        <>
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item   "  >
          <Link className="nav-link "   aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item  ">  
          <Link className="nav-link"  to="/service">Service</Link>
        </li>
        <li className="nav-item  "  >  
          <Link className="nav-link  "  to="/about" tabindex="-1" aria-disabled="true">About</Link>
        </li>
        <li className="nav-item  "  > 
          <Link className="nav-link  "  to="/contact" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
      </ul>
    </div>

      <form className="d-flex">
        
        <h1 className='navbar-brand' > <Link style={{textDecorationLine:"none",fontSize:"1.5rem"}} to={"https://www.faimsoft.com/" } target='_black'>FaimSoft </Link></h1>
      </form>
  </div>
</nav>
</div>
</div></div>

 </>
    )
};
export default Navbar;