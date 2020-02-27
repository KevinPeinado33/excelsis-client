import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function SidebarDashboard() {
    return (
        <Router>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/bandeja" className="nav-link">
                            <i className="ti-shield menu-icon"></i>
                            <span className="menu-title">Bandeja</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/publicaciones" className="nav-link">
                            <i className="ti-palette menu-icon"></i>
                            <span className="menu-title">Publicaciones</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">
                            <i className="ti-layout-list-post menu-icon"></i>
                            <span className="menu-title">Historial</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">
                            <i className="ti-pie-chart menu-icon"></i>
                            <span className="menu-title">Multimedia</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">
                            <i className="ti-view-list-alt menu-icon"></i>
                            <span className="menu-title">Configuración</span>
                        </a>
                    </li>
                    {/**
                <li className="nav-item">
                    <a className="nav-link" href="!#">
                        <i className="ti-star menu-icon"></i>
                        <span className="menu-title">Icons</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="!#" aria-expanded="false" aria-controls="auth">
                        <i className="ti-user menu-icon"></i>
                        <span className="menu-title">User Pages</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="!#">
                        <i className="ti-write menu-icon"></i>
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>*/}
                </ul>
            </nav>
        </Router>
    )
}