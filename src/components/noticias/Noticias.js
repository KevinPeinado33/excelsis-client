import React, { Fragment, useState, useEffect } from 'react';
import './style-noticias.css'

import { API_BASE_URL } from '../../config/Configuracion';
import { Link } from 'react-router-dom';
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
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center border-primary">
                            <h2 className="font-weight-light text-primary">Noticias Importantes</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12  block-13">
                    <div className="owl-carousel nonloop-block-13">
                        {noticias.length === 0 ? ''
                            : noticias.map((item) =>
                                <div className="d-block d-md-flex listing vertical" key={item.idnoticia}>
                                    <Link to={{ pathname: `/detalle-noticia`, state: { idnoticia: item.idnoticia } }}>
                                        <a href="!#" className="img d-block" style={{ backgroundImage: `url(${item.url_imagen})` }}></a>
                                    </Link>
                                    <div className="lh-content">
                                        <span className="category">{item.categoria}</span>
                                        <a href="/" className="bookmark"><span className="icon-heart"></span></a>
                                        <h3>
                                            <Link to={{ pathname: `/detalle-noticia`, state: { idnoticia: item.idnoticia } }}>
                                                <a href="!#">{item.titulo}</a>
                                            </Link>
                                        </h3>
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