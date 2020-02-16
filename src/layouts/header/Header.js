import React from 'react';
import './style-header.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {
    return (
        <Router>
            <header className="site-navbar container py-0 bg-white" role="banner">
                <div className="row align-items-center">

                    <div className="col-6 col-xl-2">
                        <h1 className="mb-0 site-logo"><a href="index.html" className="text-black mb-0">Exce<span
                            className="text-primary">lsis</span> </a></h1>
                    </div>
                    <div className="col-12 col-md-10 d-none d-xl-block">
                        <nav className="site-navigation position-relative text-right" role="navigation">

                            <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                <li className="active"><a href="index.html">Principal</a></li>
                                <li><a href="listings.html">Lorem</a></li>
                                <li className="has-children">
                                    <a href="about.html">Impust</a>
                                    <ul className="dropdown">
                                        <li><a href="!#">The Company</a></li>
                                        <li><a href="!#">The Leadership</a></li>
                                        <li><a href="!#">Philosophy</a></li>
                                        <li><a href="!#">Careers</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">Tutini</a></li>
                                <li><a href="contact.html">Contacto</a></li>

                                {/**
                                <li className="ml-xl-3 login"><a href="login.html"><span className="border-left pl-xl-4"></span>Log
                                    In</a></li>
                                <li><a href="register.html">Register</a></li>-->
                                */}

                                <li>
                                    <button type="button" className="btn btn-light btn-block">
                                        <Link to="/login">
                                            Panel
                                        </Link>
                                    </button>
                                </li>

                            </ul>
                        </nav>
                    </div>


                    <div className="d-inline-block d-xl-none ml-auto py-3 col-6 text-right cabec">
                        <a href="!#" className="site-menu-toggle js-menu-toggle text-black"><span
                            className="icon-menu h3"></span></a>
                    </div>

                </div>

            </header >
        </Router >
    );
}