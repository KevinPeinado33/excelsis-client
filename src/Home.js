import React from 'react';

import Header from './layouts/header/Header';
import Banner from './layouts/banner/Banner';

export default function Home() {
    return (
        <div className="App">
            <div className="site-wrap">

                {/** menu desplegable para mobil */}
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                {/** cabecera */}
                <Header />

                {/** banner principal, imagen, y formulario */}
                <Banner />

            </div>
        </div>
    )
}