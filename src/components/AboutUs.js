import React, { useEffect, useState } from "react";
// import SupportingGroup from './SupportingGroup'

function AboutUs() {
    const [animated, setAnimated] = useState("d-none");

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 250 && window.innerWidth > 991 ? setAnimated("owl-item") : setAnimated("");
        }
    };

    return (
        <section id="about-section" className="gray_bg">
            <div className="container mt-60px pt-2">
                <div className="row mb-30px">
                    <div className="col-md-12">
                        <div className="section-title" style={{ textAlign: "center" }}>
                            <h2 className="section-title-text pt-2">
                                About <span>Us</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <section className="mb-4">
                    <div className="container mt-3 mt-sm-4 mt-md-5">
                        <div className="row">
                            <div className={`col-lg-6 mb-res-sm-50px d-flex align-items-center active ${animated}`}>
                                <div className="about-left-image animated">
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/banner-image/about.png"}
                                        alt=""
                                        className="img-responsive about-left-image"
                                    />
                                </div>
                            </div>

                            <div className={`col-lg-6 active ${animated}`}>
                                <div className="about-content about-us-text-content">
                                    <p className={`about-title animated`}>
                                        <h2>Welcome To Sarvopari Exim</h2>
                                    </p>
                                    <p className={`mb-30px about-text animated`}>
                                        Sarvopari Exim is an Indian export and import company. We export grocery
                                        products, different clothing items, and diamonds. We at Sarvopari Exim give
                                        assurance for choosing the best grocery items, Clothing items, and superior
                                        quality diamonds to export in the different parts of the world.
                                    </p>
                                    <p className={`mb-30px about-text animated`}>
                                        We export farming products and spices with assurance for the farm-fresh spices,
                                        pulses, vegetables, fruits, dairy products, and other items. That natural
                                        farming product increases the taste of cooked food and gives the real Indian
                                        taste. Full of minerals, vitamins, proteins, and natural taste, we guarantee to
                                        give you the best! Also, we supply premium quality of cloth for men, women, and
                                        children like a shirt, t-shirt, jeans, formal cloth as well fabric of different
                                        clothing. In addition, we supply handloom products worldwide. Sarvopari Exim
                                        recently started an export polished and unpolished(rough) diamonds with superior
                                        quality worldwide. Our diamonds have an excellent cut and extract maximum
                                        brilliance.
                                    </p>
                                    <p className={`about-text animated`}>
                                        We at Sarvopari Exim supply premium quality products to the distributors and
                                        importers for the retail market, and directly to the food service industry. We
                                        take pride in providing and managing a sustainable supply chain solution,
                                        connecting Indian farmers and manufacturers with rewarding global markets for
                                        quality food products. We take pride in our customer service, and our
                                        well-qualified team ensures uncompromised satisfaction and peace of mind across
                                        the supply chain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-4">
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row no-gutters ftco-services">
                                <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services mb-md-0 mb-4">
                                        <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                            <span className="flaticon-shipped"></span>
                                        </div>
                                        <div className="media-body">
                                            <div className="single-static-meta">
                                                <h4 className="font-weight-bold about-us-service-text-header">
                                                    Fast Shipping
                                                </h4>
                                                <p className="about-us-service-text">Based on shipping type</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services mb-md-0 mb-4">
                                        <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                            <span className="flaticon-quality"></span>
                                        </div>
                                        <div className="media-body">
                                            <div className="single-static-meta">
                                                <h4 className="font-weight-bold about-us-service-text-header">
                                                    Superior quality
                                                </h4>
                                                <p className="about-us-service-text">Quality products</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services mb-md-0 mb-4">
                                        <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                            <span className="flaticon-payment"></span>
                                        </div>
                                        <div className="media-body">
                                            <div className="single-static-meta">
                                                <h4 className="font-weight-bold about-us-service-text-header">
                                                    100% Payment Secure
                                                </h4>
                                                <p className="about-us-service-text">Your payment are safe with us.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services mb-md-0 mb-4">
                                        <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                            <span className="flaticon-support"></span>
                                        </div>
                                        <div className="media-body">
                                            <div className="single-static-meta">
                                                <h4 className="font-weight-bold about-us-service-text-header">
                                                    Support 24/7
                                                </h4>
                                                <p className="about-us-service-text">Contact us 24 hours a day</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}

export default AboutUs;
