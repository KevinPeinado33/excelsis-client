import React, { useState } from 'react';

import NavbarDashboard from '../panel/dashboard/navbar/NavbarDashboard';
import SidebarDashboard from '../panel/dashboard/sidebar/SidebarDashboard';
import FooterDashboard from '../panel/dashboard/footer/Footer';

import axios from 'axios';
import { API_BASE_URL } from '../../config/Configuracion';

export default function CrearNuevoUsuario() {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [estado, setEstado] = useState(1); // [1] nuetro, [2] correcto, [3] incorrecto

    function registrarUsuarioNuevo(event) {
        event.preventDefault();
        const url = `${API_BASE_URL}/usuario/registrar-usuario`;
        axios.post(url, { usuario, password, nombres, apellidos })
            .then(response => {
                if (response.status === 200) {
                    console.log("Registrado Correctamente");
                    setNombres('');
                    setApellidos('');
                    setUsuario('');
                    setPassword('');
                    setEstado(2);
                } else {
                    console.log("Error al registrar");
                    setEstado(3);
                }
            });
    }


    function validarFormulario() {
        return nombres.length > 0 && apellidos.length > 0 && usuario.length > 0 && password.length > 0;
    }

    if(estado === 2 || estado === 3) {
        setTimeout(() => {
            setEstado(1);
        }, 4000);
    }

    return (
        <div className="container-scroller"> {/** engloba todo el cuerpo del dashord */}
            <NavbarDashboard />
            <div className="container-fluid page-body-wrapper">
                <SidebarDashboard />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {/** aqui va todo el contenido de la pagina */}
                        <h3>Registrar Nuevo Usuario</h3>
                        <div className="mt-5"></div>
                        {estado === 2 ? 
                            <div className="alert alert-primary" role="alert">
                                <i className="ti-check-box menu-icon"></i> Usuario Registrado Correctamente
                            </div> : '' }
                        {estado === 3 ?
                            <div className="alert alert-danger" role="alert">
                                <i className="ti-na menu-icon"></i> Error Al Registrar Nuevo Usuario
                            </div> : ''}
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={registrarUsuarioNuevo}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label >Nombres</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={nombres}
                                                    onChange={e => setNombres(e.target.value)}
                                                />
                                                <small className="form-text text-muted">Ingrese los nombres completos del usuario</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label >Apellidos</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={apellidos}
                                                    onChange={e => setApellidos(e.target.value)}
                                                />
                                                <small className="form-text text-muted">Ingrese ambos apellidos</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label >Usuario o Correo Electronico</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={usuario}
                                                    onChange={e => setUsuario(e.target.value)}
                                                />
                                                <small className="form-text text-muted">Ingrese un nombre de usuario o un correo de referencia</small>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label >Contraseña</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                                <small className="form-text text-muted">Ingrese la contraseña, puede contener caracteres especiales</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-primary" disabled={!validarFormulario()}><i className="ti-save menu-icon"></i> Registrar Nuevo Usuario</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <FooterDashboard />
                </div>
            </div>
        </div>
    )
}