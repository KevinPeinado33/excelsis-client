import React from 'react';

import NavbarDashboard from '../../components/panel/dashboard/navbar/NavbarDashboard';
import SidebarDashboard from '../../components/panel/dashboard/sidebar/SidebarDashboard';
import FooterDashboard from '../../components/panel/dashboard/footer/Footer';

export default function UploadBanner() {
    return(
        <div className="container-scroller"> {/** engloba todo el cuerpo del dashord */}
            <NavbarDashboard />
            <div className="container-fluid page-body-wrapper">
                <SidebarDashboard />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {/** aqui va todo el contenido de la pagina */}
                        UploadBanner
                    </div>
                    <FooterDashboard />
                </div>
            </div>
        </div>
    )
}
