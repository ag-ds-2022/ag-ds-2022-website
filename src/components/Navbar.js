import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import ProductType from "../assets/json/product-type.json";

function Navbar() {
    const [stickyClass, setStickyClass] = useState("");

    const scrollToSection = (sectionId) => {
        const yOffset = -100;
        const element = document.getElementById(sectionId);
        const y = element.getBoundingClientRect().y + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 67 ? setStickyClass("sticky-nav") : setStickyClass("");
        }
    };

    return (
        <section id="home-section" className="navbar-container">
            <hr />
            <nav className={`navbar navbar-expand-lg navbar-light px-4 py-2 navbar-custom sticky-nav ${stickyClass}`}>
                <div className="container navbar-container-custom">
                    <div className="d-flex justify-content-center">
                        <Link to="/" className="navbar-brand" href="#">
                            <img src={logo} alt="logo" width="130px"></img>
                        </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2 active">
                                <Link to="/" className="nav-link fw-bold" href="#" onClick={() => scrollToSection("home-section")}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item px-2 dropdown">
                                <Link
                                    to="/"
                                    className="nav-link fw-bold dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Products
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {Object.keys(ProductType).map((val, index) => {
                                        return (
                                            <Link
                                                to={`/products/${val}`}
                                                className="dropdown-item"
                                                href="#"
                                                key={index}
                                            >
                                                {val}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </li>
                            <li className="nav-item px-2">
                                <Link
                                    to="/#about"
                                    className="nav-link fw-bold"
                                    href="#"
                                    onClick={() => scrollToSection("about-section")}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link
                                    to="/#contact"
                                    className="nav-link fw-bold"
                                    href="#"
                                    onClick={() => scrollToSection("contact-section")}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
