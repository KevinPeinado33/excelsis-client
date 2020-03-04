import React from 'react';
import './style-header.css';

import { Link } from 'react-router-dom';
import LogoExcelsis from '../../resources/img/logo_excelsis.png';

export default function Header() {
    return (
            <header className="site-navbar container py-0 bg-white" role="banner">
                <div className="row align-items-center">

                    <div className="col-6 col-xl-2">
                        <img src={LogoExcelsis} style={{width: 150}} />
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
                                    <Link to="/login">
                                        <button type="button" className="btn btn-light btn-block">
                                            Panel <i className="ti-shift-right menu-icon"></i>
                                    </button>
                                    </Link>
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
    );
}