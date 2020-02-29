import React, { Fragment, useState, useEffect } from 'react';
import './style-noticias.css'

import { API_BASE_URL } from '../../config/Configuracion';
import axios from 'axios';


export default function Notcias() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const url = `${API_BASE_URL}/listado-noticia`;
        axios.get(url)
            .then(response => {
                const data = response.data;
                setNoticias(data);
            });
    }, []);

    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <h2 className="h4 mb-4 text-black">Sección De Noticias</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12  block-13">
                    <div className="owl-carousel nonloop-block-13">
                            <div className="d-block d-md-flex listing vertical">
                                <a href="!#" className="img d-block block-image"></a>
                                <div className="lh-content">
                                    <span className="category">asd</span>
                                    <a href="!#" className="bookmark"><span className="icon-heart"></span></a>
                                    <h3><a href="!#">acd</a></h3>
                                    <address>c</address>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}