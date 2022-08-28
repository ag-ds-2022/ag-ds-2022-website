import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const form = useRef();
    const notify = () => toast("We will contact you soon.");
    const [isMailSend, setIsMailSend] = useState(false);


    function sendEmail(e) {
        e.preventDefault();
        if (isMailSend) {
            return null;
        }
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then(function (response) {
                notify();
                setIsMailSend(true);
                form?.current?.reset();
            }, function (err) {
                console.log('FAILED...', err);
            });
    }

    return (
        <>
            <section id="contact-section" className="mtb-60px">
                <div className="contact-area mtb-60px">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="section-title pt-5 pb-4" style={{ textAlign: 'center' }}>
                                    <h2 className="section-title-text">Contact <span>Us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="custom-row-2">
                            <div className="col-12">
                                <div className="contact-form contact-form-background">

                                    <form ref={form} className="contact-form-style" id="contact-form" onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input name="name" placeholder="Name*" type="text" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input name="user_email" placeholder="Email*" type="email" required />
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
            <ToastContainer />
        </>
    )
}

export default ContactUs