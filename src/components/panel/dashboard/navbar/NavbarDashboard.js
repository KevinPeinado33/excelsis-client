import React from 'react';
import logo_excelsis from '../../../../resources/img/logo_excelsis.png';

import { Link } from 'react-router-dom';

export default function NavbarDashboard() {
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link to="/" className="navbar-brand brand-logo mr-5" href="!#"><img src={logo_excelsis} className="mr-2"
                    alt="logo" /></Link>
                <Link to="/" className="navbar-brand brand-logo-mini" href="!#"><img src={logo_excelsis} alt="logo" /></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="ti-view-list"></span>
                </button>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="!#" data-toggle="dropdown" id="notificationDropdown">
                            <i className="ti-user mx-0" style={{fontSize: 25, color: '#2164D8'}}></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item" href="/">
                                <i className="ti-power-off text-primary"></i>
                                Cerrar Sesión
                            </a>
                        </div>  
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-toggle="offcanvas">
                    <span className="ti-view-list"></span>
                </button>
            </div>
        </nav>
    )
}