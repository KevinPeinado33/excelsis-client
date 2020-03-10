import React, { useState, useEffect, Fragment } from 'react';

import { API_BASE_URL } from '../../config/Configuracion';
import axios from 'axios';
import Footer from '../../layouts/footer/Footer';
import { Link } from 'react-router-dom';

export default function DetalleNoticia(props) {

    const id = props.location.state.idnoticia;

    const [noticia, setNoticia] = useState({});

    const { idnoticia, titulo, categoria, lugar, url_imagen, descripcion } = noticia;

    useEffect(() => {
        const url = `${API_BASE_URL}/noticia/obtener-noticia/${id}`;
        axios.get(url)
            .then(response => {
                const { data } = response;
                console.log(data);
                setNoticia(data);
            })
    }, []);

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


                <div className="site-blocks-cover inner-page-cover overlay" style={{ backgroundImage: `url(${url_imagen})` }}
                    data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">

                            <div className="col-md-10" data-aos="fade-up" data-aos-delay="400">


                                <div className="row justify-content-center mt-5">
                                    <div className="col-md-8 text-center">
                                        <h1>{titulo}</h1>
                                        <p className="mb-0">{lugar}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="p-5 bg-white">
                                    <h2><strong>{titulo}</strong> <span className="badge badge-success">{categoria}</span></h2>
                                    <br/>
                                    <h4>Detalle y Descripción Del Evento</h4>
                                    <br/><br/>
                                    <h5>{descripcion}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="container mb-5">
                        <a href="/" className="btn btn-primary"><i className="ti-shift-left menu-icon"></i> Regresar</a>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}