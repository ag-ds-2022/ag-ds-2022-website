import React from 'react'
import SupportingGroup from './SupportingGroup'
import staticIcons1 from '../assets/images/icons/static-icons-1.png'
import staticIcons2 from '../assets/images/icons/static-icons-2.png'
import staticIcons3 from '../assets/images/icons/static-icons-3.png'
import staticIcons4 from '../assets/images/icons/static-icons-4.png'

function AboutUs() {
    return (
        <section id="about-section" className="gray_bg">
            < div className="container mt-60px" >
                <div className="row mt-30px mb-30px">
                    <div className="col-md-12">
                        <div className="section-title pd-5" style={{ textAlign: 'center' }}>
                            <h2 className="section-title-text">About <span>Us</span></h2>
                        </div>
                    </div>
                </div>
                <section className="mb-4">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-6 mb-res-sm-50px">
                                <div className="about-left-image">
                                    <img src={process.env.PUBLIC_URL + "/images/banner-image/about.png"} alt="" className="img-responsive about-left-image" />
                                </div>
                            </div>
                            <div className="col-lg-6 about-us-right">
                                <div className="about-content">
                                    <div className="about-title">
                                        <h2>Welcome To Sarvopari Exim</h2>
                                    </div>
                                    <p className="mb-30px">
                                        Sarvopari Exim is an Indian export and import company. We export grocery products,
                                        different clothing items, and diamonds. We at Sarvopari Exim give assurance for choosing
                                        the best grocery items, Clothing items, and superior quality diamonds to export in the
                                        different parts of the world.
                                    </p>
                                    <p className="mb-30px">
                                        We export farming products and spices with assurance for the farm-fresh spices, pulses,
                                        vegetables, fruits, dairy products, and other items. That natural farming product
                                        increases the taste of cooked food and gives the real Indian taste. Full of minerals,
                                        vitamins, proteins, and natural taste, we guarantee to give you the best! Also, we
                                        supply premium quality of cloth for men, women, and children like a shirt, t-shirt,
                                        jeans, formal cloth as well fabric of different clothing. In addition, we supply
                                        handloom products worldwide. Sarvopari Exim recently started an export polished and
                                        unpolished(rough) diamonds with superior quality worldwide. Our diamonds have an
                                        excellent cut and extract maximum brilliance.
                                    </p>
                                    <p>
                                        We at Sarvopari Exim supply premium quality products to the distributors and importers
                                        for the retail market, and directly to the food service industry. We take pride in
                                        providing and managing a sustainable supply chain solution, connecting Indian farmers
                                        and manufacturers with rewarding global markets for quality food products. We take pride
                                        in our customer service, and our well-qualified team ensures uncompromised satisfaction
                                        and peace of mind across the supply chain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-4">
                    <section class="ftco-section">
                        <div class="container">
                            <div class="row no-gutters ftco-services">
                                <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div class="media block-6 services mb-md-0 mb-4">
                                        <div class="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                            <span class="flaticon-shipped"></span>
                                        </div>
                                        <div class="media-body">
                                            <div className="single-static-meta">
                                                <h4>Fast Shipping</h4>
                                                <p>Based on shipping type</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div class="media block-6 services mb-md-0 mb-4">
                                        <div class="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                            <span class="flaticon-quality"></span>
                                        </div>
                                        <div class="media-body">
                                            <div className="single-static-meta">
                                                <h4>Superior quality</h4>
                                                <p>Quality products</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div class="media block-6 services mb-md-0 mb-4">
                                        <div class="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                            <span class="flaticon-payment"></span>
                                        </div>
                                        <div class="media-body">
                                            <div className="single-static-meta">
                                                <h4>100% Payment Secure</h4>
                                                <p>Your payment are safe with us.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div class="media block-6 services mb-md-0 mb-4">
                                        <div class="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                            <span class="flaticon-support"></span>
                                        </div>
                                        <div class="media-body">
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
                </section>
            </div >
        </section >
    )
}

export default AboutUs