import React from 'react';

import { Route } from 'react-router-dom';

import NavbarDashboard from './dashboard/navbar/NavbarDashboard';
import SidebarDashboard from './dashboard/sidebar/SidebarDashboard';
import FooterDashboard from './dashboard/footer/Footer';

import Pruebis from './pruebis';

export default function Main() {
    return (
        <div className="container-scroller"> {/** engloba todo el cuerpo del dashord */}
            <NavbarDashboard />
            <div className="container-fluid page-body-wrapper">
                <SidebarDashboard />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {/** aqui va todo el contenido de la pagina */}
                        <Route path='/pruebis' component={Pruebis} />
                    </div>
                    <FooterDashboard />
                </div>
            </div>
        </div>
    )
}