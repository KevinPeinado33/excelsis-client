import React from 'react';

import Header from './layouts/header/Header';
import Banner from './layouts/banner/Banner';
import Noticias from './components/noticias/Noticias';
import Footer from './layouts/footer/Footer';

import Popular from './layouts/popular/Popular';
import Ubicacion from './layouts/ubicacion/Ubicacion';
import Ideales from './layouts/ideales/Ideales';

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

                {/** cuerpo [cards, y wittdget] */}
                <div className="site-section bg-light">
                    <div className="container">
                        <Noticias />
                    </div>

                    <div className="site-section" data-aos="fade">
                        <div className="container">
                            {/** fotos recuerdos */}
                            <Popular />
                        </div>
                    </div>
                    <div className="site-section" data-aos="fade">
                        {/** ubicacion del colegio API google maps */}
                        <div className="container">
                            <Ubicacion />
                        </div>
                    </div>
                    <Ideales />

                </div>
                <Footer />

            </div>
        </div>
    )
}