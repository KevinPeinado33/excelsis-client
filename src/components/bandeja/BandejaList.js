import React, { Fragment, useEffect, useState } from 'react';

import { API_BASE_URL } from '../../config/Configuracion';
import axios from 'axios';

export default function BandejaList() {

    const [interesados, setInteresados] = useState([]);
    const [consulta, setConsulta] = useState(true);

    useEffect(() => {
        obtenerInteresados()
    }, [interesados, consulta]);

    function obtenerInteresados() {
        const url = `${API_BASE_URL}/interesado/lista-interesados`;
        if (consulta) {
            axios.get(url)
                .then(response => {
                    const data = response.data;
                    setInteresados(data);
                    console.log(interesados);
                    setConsulta(false);
                });
        }
    }

    function marcarAtendido(index, idinteresado) {
        interesados.splice(index, 1);
        const url = `${API_BASE_URL}/interesado/marcar-antendido/${idinteresado}`;
        axios.put(url)
            .then(response => {
                if (response.status === 200) {
                    console.log("Actualizado correctamente");
                } else {
                    console.log("Error");
                }
            });
        setConsulta(true);
    }

    return (
        <Fragment>
            <h2>Lista De Interesados</h2>
            <div className="alert alert-primary" role="alert" style={{ marginTop: 20 }}>
                <i className="ti-light-bulb menu-icon"></i> Lista de personas que desean información sobre alguna vacante.
            </div>
            <div className="row" style={{ marginTop: 10 }}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-striped table-hover" style={{ textAlign: "center" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">#. Celular</th>
                                        <th scope="col">Nivel</th>
                                        <th scope="col">Marcar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {interesados.map((item, index) =>
                                        <tr key={item.idinteresado}>
                                            <td>{index + 1}</td>
                                            <td>{item.nombres_apellidos}</td>
                                            <td>{item.num_cel}</td>
                                            <td>{item.nivel_instruccion}</td>
                                            <td><button
                                                type="button"
                                                className="btn btn-link"
                                                onClick={() => marcarAtendido(index, item.idinteresado)}
                                            >
                                                <i className="ti-check menu-icon"></i> Atendido
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}