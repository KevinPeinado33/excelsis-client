import React, { useState, useEffect } from 'react';

import NavbarDashboard from '../panel/dashboard/navbar/NavbarDashboard';
import SidebarDashboard from '../panel/dashboard/sidebar/SidebarDashboard';
import FooterDashboard from '../panel/dashboard/footer/Footer';

import axios from 'axios';
import { API_BASE_URL } from '../../config/Configuracion';

export default function CambiarContrasenia(props) {

    const id = props.location.state.idusuario;

    const [idusuario, setIdusuario] = useState(null);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [estadoUsuario, setEstadoUsuario] = useState(null);

    const [estado, setEstado] = useState(1); // [1] nuetro, [2] correcto, [3] incorrecto

    const { history } = props;


    useEffect(() => {
        obtenerUsuario();
    }, []);

    function obtenerUsuario() {
        const url = `${API_BASE_URL}/usuario/buscar-usuario-by-id/${id}`;
        axios.get(url)
            .then(response => {
                const data = response.data;
                setUsuario(data.usuario);
                setPassword(data.password);
                setNombres(data.nombres);
                setApellidos(data.apellidos);
                setIdusuario(data.idusuario);
                setEstadoUsuario(data.estado);
            })
    }

    function registrarActualizado(event) {
        event.preventDefault();
        console.log("entro a la funcion");
        const url = `${API_BASE_URL}/usuario/editar-usuario/${idusuario}`;
        axios.put(url, { usuario, password, nombres, apellidos, estadoUsuario })
            .then(response => {
                if (response.status === 200) {
                    setUsuario('');
                    setPassword('');
                    setNombres('');
                    setApellidos('');
                    setIdusuario('');
                    setEstadoUsuario('');
                    setEstado(2);
                } else {
                    setEstado(3);
                }
            })
    }

    function validarFormulario() {
        return nombres.length > 0 && apellidos.length > 0 && usuario.length > 0 && password.length > 0 && estadoUsuario > 0;
    }

    if (estado === 2) {
        setTimeout(() => {
            setEstado(1);
            history.push('/lista-usuarios');
        }, 4000);
    } else if(estado === 3) {
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
                        <h3>Edición De Usuario</h3>
                        <div className="mt-5"></div>
                        {estado === 2 ?
                            <div className="alert alert-primary" role="alert">
                                <i className="ti-check-box menu-icon"></i> Usuario Actualizado Correctamente
                            </div> : ''}
                        {estado === 3 ?
                            <div className="alert alert-danger" role="alert">
                                <i className="ti-na menu-icon"></i> Error Al Actualizar Nuevo Usuario
                            </div> : ''}
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={registrarActualizado}>
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
                                            <div className="form-group">
                                                <label>Estado Del Usuario</label>
                                                <select className="form-control" value={estadoUsuario} onChange={e => setEstadoUsuario(e.target.value)}>
                                                    <option value="null">Estado Del Usuario</option>
                                                    <option value={1}>Activo</option>
                                                    <option value={2}>Desactivar o Eliminar</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-primary" disabled={!validarFormulario()}><i className="ti-save menu-icon"></i> Guardar Nueva Actualización</button>
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