import React, { Fragment, useState, useEffect } from 'react';
import './style-noticias.css'

import { API_BASE_URL } from '../../config/Configuracion';
import axios from 'axios';


export default function Noticias() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const url = `${API_BASE_URL}/noticia/listado-noticia`;
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
                    <h3 className="h3 mb-4 text-black">Sección De Noticias</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12  block-13">
                    <div className="owl-carousel nonloop-block-13">
                        {noticias.length === 0 ?''
                            : noticias.map((item) =>
                                <div className="d-block d-md-flex listing vertical" key={item.idnoticia}>
                                    <a href="/" className="img d-block" style={{ backgroundImage: `url(${item.url_imagen})` }}></a>
                                    <div className="lh-content">
                                        <span className="category">{item.categoria}</span>
                                        <a href="/" className="bookmark"><span className="icon-heart"></span></a>
                                        <h3><a href="/">{item.titulo}</a></h3>
                                        <address>{item.lugar}</address>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}