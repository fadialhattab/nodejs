import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
     <div className="d-flex   align-items-center p-3 px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0  font-weight-normal">Company name</h5>
    <nav className="my-2 ms-auto my-md-0 mr-md-3">
    <Link className="text-decoration-none p-2 text-dark" to="/">Home</Link>
    <Link className="text-decoration-none p-2 text-dark" to="/About">About</Link>
    
    </nav>
    <a className="btn btn-outline-primary" href="#">Sign up</a>
</div>
    </>
  )
}

export default Navbar