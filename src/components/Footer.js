import React from 'react'
import { Link } from 'react-router-dom'
import ProductType from '../assets/json/product-type.json'
import flogo from '../assets/images/logo/flogo.png'

function Footer() {

  const scrollToSection = (sectionId) => {
    const yOffset = -100;
    const element = document.getElementById(sectionId);
    const y = element.getBoundingClientRect().y + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <>
      <footer className="footer-area mt-5">
        <div className="footer-top pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 mt-res-sx-30px mt-res-md-30px">
                <h4 className="footer-herading">Shipline Exim</h4>
                <div className="about-footer">
                  <p className="text-info" style={{ fontSize: '15px' }}>Trust, The part of business, You can achieve here.</p>
                </div><br />
                <div class="pro-details-social-info">
                  <div class="social-info">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100084975325292" target="_blank"><i class="ion-social-facebook"></i></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/shiplineexim/" target="_blank"><i class="ion-social-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-res-sx-30px mt-res-md-30px">
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
              <div className="col-md-6 col-lg-3 mt-res-sx-30px mt-res-md-30px">
                <div className="single-wedge">
                  <h4 className="footer-herading">Navigation Menu</h4>
                  <div className="footer-links">
                    <ul>
                      <li><Link to="/" onClick={() => scrollToSection("home-section")}>Home</Link></li>
                      <li><Link to="/#about" onClick={() => scrollToSection("about-section")}>About Us</Link></li>
                      <li><Link to="/#contact" onClick={() => scrollToSection("contact-section")}>Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-res-sx-30px mt-res-md-30px">
                <div className="single-wedge">
                  <h4 className="footer-herading">Have a Questions?</h4>
                  <div className="s">
                    <ul>
                      <li><a href="https://wa.me/917567902536" target="_blank">+91 7567902536</a></li>
                      <li><a href="mailto:shiplineexim@gmail.com?subject = Hey, Shipline Exim">shiplineexim@gmail.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              Copyright © 2022 All rights reserved | <Link to="/" onClick={() => scrollToSection("home-section")}>Shipline Exim</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer