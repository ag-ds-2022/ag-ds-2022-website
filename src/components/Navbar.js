import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'
import ProductType from '../assets/json/product-type.json'

function Navbar() {
    return (
        <>
            <div className="d-flex justify-content-center m-3" >
                <Link to="/" className="navbar-brand" href="#"><img src={logo} alt="logo"></img></Link>
            </div>
            <hr />
            <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
                <div className="container-fluid" >
                    <div className="phone1">
                        <span>Call us:</span><br />
                        <a className="nav-link fw-bold" href="tel:(+800)345678">+91 7046209319</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center mx-5" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2 active">
                                <Link to="/" className="nav-link fw-bold" href="#">Home</Link>
                            </li>
                            <li className="nav-item px-2 dropdown">
                                <Link to="/" className="nav-link fw-bold dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Products
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {Object.keys(ProductType).map((val, index) => {
                                        return <Link to={`/products/${val}`} className="dropdown-item" href="#" key={index}>{val}</Link>
                                    })}
                                </div>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/about" className="nav-link fw-bold" href="#">About Us</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/contact" className="nav-link fw-bold" href="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar