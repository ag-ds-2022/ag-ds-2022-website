import React from 'react'

function ContactUs() {
    return (
        <section id="contact-section">
            <div className="contact-area mtb-60px">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="section-title" style={{ textAlign: 'center' }}>
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="custom-row-2">
                        <div className="col-12">
                            <div className="contact-form contact-form-background">

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
        </section>
    )
}

export default ContactUs