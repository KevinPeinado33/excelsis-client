import React, { Fragment, useState, useEffect } from 'react';

import { API_BASE_URL } from '../../config/Configuracion';
import axios from 'axios';
import firebase from 'firebase';

export default function NoticiasForm() {

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [lugar, setLugar] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [noticias, setNoticias] = useState([]);

    const [estado, setEstado] = useState(false);
    const [consulta, setConsulta] = useState(true);

    const [uploadValue, setUploadValue] = useState(0);
    const [picture, setPicture] = useState('');

    useEffect(() => {
        obtenerNoticas();
    }, [consulta, noticias]);

    function registrarNotcia(event) {
        event.preventDefault();
        const url = `${API_BASE_URL}/noticia/registrar-noticias`;
        axios.post(url, { titulo, categoria, lugar, picture, descripcion })
            .then(response => {
                if (response.status === 200) {
                    setTitulo('');
                    setCategoria('');
                    setLugar('');
                    setPicture('');
                    setConsulta(true);
                } else { setEstado(true); }
            });

    }

    function handleUpload(event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadValue(percentage);
        }, error => {
            console.log(error.message);
        }, () => {
            storageRef.getDownloadURL().then(url => {
                setPicture(url);
            })
        });
    }

    function validarFormulario() { return titulo.length > 0 && categoria.length > 0 && lugar.length > 0 && descripcion.length > 0; }

    function obtenerNoticas() {
        const url = `${API_BASE_URL}/noticia/listado-noticia`;
        if (consulta) {
            axios.get(url)
                .then(response => {
                    const data = response.data;
                    setNoticias(data);
                    setConsulta(false);
                });
        }
    }

    function eliminarNoticia(index, idnoticia) {
        noticias.splice(index, 1);
        const url = `${API_BASE_URL}/noticia/cambiar-estado-noticia/${idnoticia}`;
        axios.put(url)
            .then(response => {
                if (response.status === 200) {
                    console.log('Actualizado Correctament');
                } else {
                    console.log('Error');
                }
            });
        setConsulta(true);
    }

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
                                    <br />
                                    <progress value={uploadValue} max="100"></progress>
                                    <br />
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        onChange={e => handleUpload(e)}
                                    />
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
                            <div className="col-md-11">
                                <div className="form-group">
                                    <label>Descripción De La Noticia</label>
                                    <textarea 
                                        className="form-control"
                                        rows="5"
                                        value={descripcion}
                                        onChange={e => setDescripcion(e.target.value)}
                                    />
                                    <small className="form-text text-muted">Ingrese la descripcion de la noticia, datos importantes y etc.</small>
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
            <div className="row" style={{ marginTop: 50 }}>
                <div className="col-md-11">
                    <h4>Todas Las Noticias</h4>
                    <table className="table table-hover" style={{ marginTop: 20, textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Lugar</th>
                                <th scope="col">Url Imagen</th>
                                <th scope="col">Opcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {noticias.map((item, index) =>
                                <tr key={item.idnoticia}>
                                    <td>{index + 1}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.lugar}</td>
                                    <td>{item.url_imagen.length > 35 ? `${item.url_imagen.substring(0, 35)}...` : ''}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={() => eliminarNoticia(index, item.idnoticia)}
                                        >
                                            <i className="ti-trash menu-icon"></i> Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}