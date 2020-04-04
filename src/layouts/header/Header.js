import React from 'react';
import './style-header.css';

import { Link } from 'react-router-dom';
import LogoExcelsis from '../../resources/img/logo_excelsis.png';

export default function Header() {
    return (
        <header className="site-navbar container py-0 bg-white" role="banner">
            <div className="row align-items-center">

                <div className="col-6 col-xl-2">
                    <img src={LogoExcelsis} style={{ width: 150 }} />
                </div>
                <div className="col-12 col-md-10 d-none d-xl-block">
                    <nav className="site-navigation position-relative text-right" role="navigation">

                        <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                            <li className="active"><a href="/"><i className="ti-home menu-icon"></i> Principal</a></li>
                            <li className="s"><Link to="/contactanos"><i className="ti-headphone-alt menu-icon"></i> Contáctenos</Link></li>
                            <li className="s"><a href="https://www.youtube.com/channel/UCM3ukR-wJYnHd1uTIBh02jw"><i className="ti-youtube menu-icon"></i> Canal De YouTube</a></li>
                            <li className="s"><a href="https://web.facebook.com/C.Excelsis"><i className="ti-facebook menu-icon"></i> Página De Facebook</a></li>

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