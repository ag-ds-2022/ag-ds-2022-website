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
                  <a href="index.html"><img src={flogo} alt="" /></a>
                </div>

                <div className="about-footer">
                  <p className="text-info" style={{ fontSize: '15px' }}>To gain customer's trust and provide satisfactory work is our main motive.</p>
                  <div className="social-info">
                    <ul>
                      <li>
                        <a href="index.html#"><i className="ion-social-facebook"></i></a>
                      </li>
                      <li>
                        <a href="index.html#"><i className="ion-social-twitter"></i></a>
                      </li>
                      <li>
                        <a href="index.html#"><i className="ion-social-google"></i></a>
                      </li>
                      <li>
                        <a href="index.html#"><i className="ion-social-instagram"></i></a>
                      </li>
                      <li>
                        <a href="index.html#"><i></i></a>
                      </li>
                    </ul>
                  </div>
                </div><br />
                <div>
                  Copyright © 2020 All rights reserved | <a href="index.html">Sarvopari</a>
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
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
                <div className="single-wedge">
                  <h4 className="footer-herading">Have a Questions?</h4>
                  <div>
                    <i className="ion-android-call"></i>&nbsp;
                    <span>
                      +91 7046209319
                    </span>
                    <br />
                    <div>
                      <div>
                        <i className="ion-android-mail"></i>&nbsp;
                        <span>
                          <a href="cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c1a9a0b3a5a8aaacaeb3a0a5a8b8a0f7f0f381a6aca0a8adefa2aeac">[email&#160;protected]</a>
                        </span>
                        <br />
                        <div>
                          <div>
                            <i className="ion-android-pin"></i>&nbsp;
                            <span>
                              12/2, Raghuvir Park Part-1<br /> Ahmedabad - 382350
                            </span>
                            <br />
                            <div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
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