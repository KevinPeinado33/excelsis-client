import React, { useState, useEffect } from 'react';

import { API_BASE_URL } from '../../config/Configuracion';
import axios from 'axios';

export default function NoticasList() {

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
                        {noticias.map((item, index) =>
                            <tr key={item.idnoticia}>
                                <td>{index + 1}</td>
                                <td>{item.titulo}</td>
                                <td>{item.categoria}</td>
                                <td>{item.lugar}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}