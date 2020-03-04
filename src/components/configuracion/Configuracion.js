import React from 'react';

import NavbarDashboard from '../panel/dashboard/navbar/NavbarDashboard';
import SidebarDashboard from '../panel/dashboard/sidebar/SidebarDashboard';
import FooterDashboard from '../panel/dashboard/footer/Footer';

export default function Configuracion() {
    return(
        <div className="container-scroller"> {/** engloba todo el cuerpo del dashord */}
            <NavbarDashboard />
            <div className="container-fluid page-body-wrapper">
                <SidebarDashboard />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {/** aqui va todo el contenido de la pagina */}
                        Configuracion ...!!!!
                    </div>
                    <FooterDashboard />
                </div>
            </div>
        </div>
    )
}