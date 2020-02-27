import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NoticasList() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        obtenerNoticias()
    }, [noticias]);

    function obtenerNoticias() {
        axios.get('http://localhost:4000/listado-noticia')
            .then(response => {
                const data = response.data;
                setNoticias({ data });
            });
    }

    return (
        <div className="row" style={{ marginTop: 50 }}>
            <div className="col-md-11">
                <h4>Todas Las Noticias</h4>
                <table className="table table-hover" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Url Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noticias.map((item) => () => {
                            <tr>
                                <td>
                                    item + 1
                                </td>
                                <td>
                                    item.titulo
                                </td>
                                <td>
                                    item.categoria
                                </td>
                                <td>
                                    item.lugar
                                </td>
                                <td>
                                    item.url_imagen
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}