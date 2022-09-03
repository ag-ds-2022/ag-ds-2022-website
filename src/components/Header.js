import React from 'react'
import carousel1 from '../assets/images/slider-image/1.jpg'

function Header() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                </div>
                <div className="carousel-inner h-100">
                    <div className="carousel-item active owl-item">
                        <img src={carousel1} className="d-block w-100 carousel-image-custom" alt="..." style={{ opacity: "0.8" }} />
                        <div className="carousel-caption d-md-block slider-animated-1">
                            <h1 className="animated">
                            We Export<br />
                                <strong>Precious Quality groceries</strong>
                            </h1>
                            <p className="animated">we aim to uniquely cater to your every need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header