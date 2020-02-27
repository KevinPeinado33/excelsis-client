import React, { Fragment } from 'react';

import NavbarDashboard from './dashboard/navbar/NavbarDashboard';
import SidebarDashboard from './dashboard/sidebar/SidebarDashboard';
import FooterDashboard from './dashboard/footer/Footer';

export default function Main() {
    return (
        <Fragment>
            <div className="container-scroller"> {/** engloba todo el cuerpo del dashord */}
                <NavbarDashboard />
                <div className="container-fluid page-body-wrapper">
                    <SidebarDashboard />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {/** aqui va todo el contenido de la pagina */}
                            
                        </div>
                        <FooterDashboard />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}