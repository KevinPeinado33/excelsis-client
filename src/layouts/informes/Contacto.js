import React, { Fragment } from 'react';
import './style-informe.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Informe from './Informe';
import Ubicacion from '../ubicacion/Ubicacion';

export default function Contacto() {
    return (
        <Fragment>
            <div className="site-wrap">

                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <Header />


                <div className="site-blocks-cover inner-page-cover overlay fondo_contac" data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">

                            <div className="col-md-10" data-aos="fade-up" data-aos-delay="400">


                                <div className="row justify-content-center mt-5">
                                    <div className="col-md-8 text-center">
                                        <h1><strong>Contáctenos</strong></h1>
                                        <p className="mb-0">Comunicacte con nosotros</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-5 container">
                    <div className="card-body">
                        <h2><i className="ti-comment-alt menu-icon"></i> Importante</h2>
                        <p className="mt-3" style={{ fontSize: 15 }}>
                            Si usted tiene alguna duda sobre vacantes, matriculas o en general; puede acercase a nuestra cede principal o también puede rellenar el siguiente formulario y será atendido por un asistente mediante WhatsApp.
                        </p>
                    </div>
                </div>

            </div>

            <div className="card container mt-4">

                <div className="card-body">
                    <h3 className="mb-4">Rellenar el formulario</h3>
                    <Informe />
                </div>
            </div>

            <div className="container mt-5">
                <Ubicacion />
            </div>

            <div className="mt-5">
                <Footer />
            </div>
        </Fragment>
    )
}