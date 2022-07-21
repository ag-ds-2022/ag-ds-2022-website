import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="breadcrumb-content">
                                <h1 className="breadcrumb-hrading">Contact Page</h1>
                                <ul className="breadcrumb-links">
                                    <li><Link to="/" className="nav-link fw-bold" href="#">Home</Link></li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="contact-area mtb-60px">
                <div className="container">
                    {/* <div className="contact-map mb-10">
                        <div id="map">
                        </div>
                    </div> */}
                    <div className="custom-row-2">
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-info-wrap">
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>+91 7046209319</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa fa-globe"></i>
                                    </div>
                                    <div className="contact-info-dec">
                                        <p><a href="contact.html#"><span className="__cf_email__" data-cfemail="a6d5c7d4d0c9d6c7d4cf88c3decfcbe6c3cbc7cfca88c5c9cb">[email&#160;protected]</span></a></p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="contact-info-dec">
                                        <p>12/1, Raghuvir park part 1,</p>
                                        <p>Ahmedabad-382350, Gujarat</p>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <h3>Follow Us</h3>
                                    <div className="social-info">
                                        <ul>
                                            <li>
                                                <a href="https://m.facebook.com/profile.php?id=100050721259340"><i className="ion-social-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/SarvopariE?s=21"><i className="ion-social-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com/sarvopari_exim?igshid=4zcr9s8xaazd"><i className="ion-social-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/sarvopari-exim"><i className="ion-social-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="contact-form">
                                <div className="contact-title mb-30">
                                    <h2>Get In Touch</h2>
                                </div>
                                <form className="contact-form-style" id="contact-form" action="https://demo.hasthemes.com/ecolife-preview/ecolife/assets/php/mail.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input name="name" placeholder="Name*" type="text" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input name="email" placeholder="Email*" type="email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input name="subject" placeholder="Subject*" type="text" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea name="message" placeholder="Your Message*"></textarea>
                                            <button className="submit" type="submit">SEND</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs