import React, { Fragment, useState } from 'react';

import { API_BASE_URL } from '../../config/Configuracion';
import NoticasList from './NoticiasList';
import axios from 'axios';

export default function NoticiasForm() {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [lugar, setLugar] = useState('');

    const [estado, setEstado] = useState(false);

    function registrarNotcia(event) {
        event.preventDefault();
        const url = `${API_BASE_URL}/registrar-noticias`;
        axios.post(url, {titulo, categoria, lugar})
            .then(response => {
                if(response.status === 200 ) {
                    setTitulo('');
                    setCategoria('');
                    setLugar('');
                } else { setEstado(true); }
            });
    }

    function validarFormulario() { return titulo.length > 0 && categoria.length > 0 && lugar.length > 0; }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <h3>Registrar Noticia Nueva</h3>
                    {estado ? <div className="alert alert-danger" role="alert"><i className="ti-alert menu-icon"></i> Ocurrio un error al registrar la notcia</div> : ''}
                    <form onSubmit={registrarNotcia}>
                        <div className="row" style={{ marginTop: 30 }}>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Titulo de la noticias</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={titulo}
                                        onChange={e => setTitulo(e.target.value)}
                                    />
                                    <small className="form-text text-muted">Ingrese el titulo de la noticia</small>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Categoria</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={categoria}
                                        onChange={e => setCategoria(e.target.value)}
                                    />
                                    <small className="form-text text-muted">Categoria de la noticia</small>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Imagen banner</label>
                                    <input type="file" className="form-control-file" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Lugar</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={lugar}
                                        onChange={e => setLugar(e.target.value)}
                                    />
                                    <small className="form-text text-muted">Ingrese el lugar donde se hara el evento</small>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <button type="submit" disabled={!validarFormulario()} className="btn btn-primary">Agregar Noticia +</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <NoticasList />
        </Fragment>
    )
}