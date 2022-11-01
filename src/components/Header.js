import React from 'react'
import carousel1 from '../assets/images/slider-image/1.jpg'
import carousel2 from '../assets/images/slider-image/3.jpg'
import carousel3 from '../assets/images/slider-image/2.jpg'

function Header() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner h-100">
                    <div className="carousel-item active owl-item">
                        <img src={carousel1} className="d-block w-100 carousel-image-custom" alt="..." style={{ opacity: "0.8" }} />
                        <div className="carousel-caption d-md-block slider-animated-1">
                            <h1 className="animated">
                                We Export<br />
                                <strong>Precious Quality Groceries</strong>
                            </h1>
                            <p className="animated">we aim to uniquely cater to your every need.</p>
                        </div>
                    </div>
                    <div className="carousel-item owl-item">
                        <img src={carousel2} className="d-block w-100 carousel-image-custom" alt="..." style={{ opacity: "0.8" }} />
                        <div className="carousel-caption d-md-block slider-animated-1">
                            <h1 className="animated">
                                We Export<br />
                                <strong>Precious Quality Peanut Butter</strong>
                            </h1>
                            <p className="animated">we aim to uniquely cater to your every need.</p>
                        </div>
                    </div>
                    <div className="carousel-item owl-item">
                        <img src={carousel3} className="d-block w-100 carousel-image-custom" alt="..." style={{ opacity: "0.8" }} />
                        <div className="carousel-caption d-md-block slider-animated-1">
                            <h1 className="animated">
                                We Export<br />
                                <strong>Precious Quality Pulses</strong>
                            </h1>
                            <p className="animated">we aim to uniquely cater to your every need.</p>
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
        </>
    )
}

export default Header