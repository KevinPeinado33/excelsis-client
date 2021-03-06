import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarDashboard() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/bandeja" className="nav-link">
                        <i className="ti-shield menu-icon"></i>
                        <span className="menu-title">Bandeja</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/noticias" className="nav-link">
                        <i className="ti-palette menu-icon"></i>
                        <span className="menu-title">Noticas</span>
                    </NavLink>
                </li>
                {/**
                <li className="nav-item">
                    <NavLink to="/cambiar-fondo-princial"  className="nav-link">
                        <i className="ti-layout-list-post menu-icon"></i>
                        <span className="menu-title">Fondo Principal</span>
                    </NavLink>
                </li>
                 */}
                <li className="nav-item">
                    <NavLink to="/lista-usuarios" className="nav-link">
                        <i className="ti-pie-chart menu-icon"></i>
                        <span className="menu-title">Lista De Usuario</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/crear-usuario-nuevo" className="nav-link">
                        <i className="ti-view-list-alt menu-icon"></i>
                        <span className="menu-title">Crear Usuario</span>
                    </NavLink>
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
    )
}