import React from 'react'
import carousel1 from '../assets/images/slider-image/slider1.jpg'
import carousel2 from '../assets/images/slider-image/slider2.jpg'
import staticIcons1 from '../assets/images/icons/static-icons-1.png'
import staticIcons2 from '../assets/images/icons/static-icons-2.png'
import staticIcons3 from '../assets/images/icons/static-icons-3.png'
import staticIcons4 from '../assets/images/icons/static-icons-4.png'

function Header() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner h-100">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..." style={{ opacity: "0.8" }} />
                        <div className="carousel-caption d-md-block">
                            <h1 className="animated">
                                We Export<br />
                                <strong>Precious Quality Cloths</strong>
                            </h1>
                            <p className="animated">Our aim is to uniquely catering to your every need.</p>
                            <a href="#" className="shop-btn animated">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..." style={{ opacity: "0.8" }} />
                        <div className="carousel-caption d-md-block">
                            <h1 className="animated">
                                We Export<br />
                                <strong>Superior Quality Spices</strong>
                            </h1>
                            <p className="animated">For every aspect of perfection and the authentic spices for the authentic taste</p>
                            <a href="#" className="shop-btn animated">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="static-area mtb-60px">
                <div className="container">
                    <div className="static-area-wrap">
                        <div className="row">

                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                                    <img src={staticIcons1} alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>Fast Shipping</h4>
                                        <p>Based on shipping type</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                                    <img src={staticIcons2} alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>Superior quality</h4>
                                        <p>Quality products</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                                    <img src={staticIcons3} alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>100% Payment Secure</h4>
                                        <p>Your payment are safe with us.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
                                <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                                    <img src={staticIcons4} alt="" className="img-responsive" />
                                    <div className="single-static-meta">
                                        <h4>Support 24/7</h4>
                                        <p>Contact us 24 hours a day</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header