import React from 'react'
import { Link } from 'react-router-dom'
import ProductType from '../assets/json/product-type.json'
import flogo from '../assets/images/logo/flogo.png'

function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-md-6 col-lg-4">

                <div className="footer-logo">
                  <a href="/"><img src={flogo} alt="" width="200px" /></a>
                </div>

                <div className="about-footer">
                  <p className="text-info" style={{ fontSize: '15px' }}>Trust, The part of business, You can achieve here.</p>
                </div><br />
                <div>
                  Copyright © 2022 All rights reserved | <a href="/">Shipline Exim</a>
                </div>
              </div>

              <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
                <div className="single-wedge">
                  <h4 className="footer-herading">Products</h4>
                  <div className="footer-links">
                    <ul>
                      {Object.keys(ProductType).map((val, index) => {
                        return <li key={index}><Link to={`/products/${val}`} key={index}>{val}</Link></li>
                      })}

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
                <div className="single-wedge">
                  <h4 className="footer-herading">Navigation Menu</h4>
                  <div className="footer-links">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/#about">About Us</Link></li>
                      <li><Link to="/#contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer