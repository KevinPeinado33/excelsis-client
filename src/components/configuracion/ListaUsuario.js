import React, { useState, useEffect } from 'react';

import NavbarDashboard from '../panel/dashboard/navbar/NavbarDashboard';
import SidebarDashboard from '../panel/dashboard/sidebar/SidebarDashboard';
import FooterDashboard from '../panel/dashboard/footer/Footer';

import axios from 'axios';
import { API_BASE_URL } from '../../config/Configuracion';
import { Link } from 'react-router-dom';

export default function ListaUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        obtenerUsuarios()
    }, []);

    function obtenerUsuarios() {
        const url = `${API_BASE_URL}/usuario/lista-usuarios`;
        axios.get(url)
            .then(response => {
                const data = response.data;
                setUsuarios(data);
            });
    }
    return (
        <div className="container-scroller"> {/** engloba todo el cuerpo del dashord */}
            <NavbarDashboard />
            <div className="container-fluid page-body-wrapper">
                <SidebarDashboard />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {/** aqui va todo el contenido de la pagina */}
                        <h3>Lista De Todos Los Usuarios Registrados</h3>
                        <div className="card mt-4">
                            <div className="card-body">
                                <table className="table table-striped table-hover" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Usuario</th>
                                            <th scope="col">Nombres</th>
                                            <th scope="col">Apellidos</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.map((item, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.usuario}</td>
                                                <td>{item.nombres}</td>
                                                <td>{item.apellidos}</td>
                                        <td>{item.estado === 1 ? <span class="badge badge-success">Activo</span> : <span class="badge badge-danger">Descativado</span>}</td>
                                                <td>
                                                    <Link to={{ pathname: `/cambio-contrasenia`, state: { idusuario: item.idusuario } }} className="btn btn-outline-warning">
                                                        <i className="ti-pencil menu-icon"></i> Editar
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <FooterDashboard />
                </div>
            </div>
        </div>
    )
}