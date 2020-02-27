import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [estado, setEstado] = useState(false);

    const { history } = props;

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:4000/validar-usuario', { usuario, password })
            .then(response => {
                const data = response.data;
                if (JSON.stringify(data).length >= 3) {
                    console.log("Correcto");
                    history.push('/bandeja');
                } else {
                    console.log("Incorrecto");
                    setEstado(true);
                    setUsuario('');
                    setPassword('');
                }
            });
    }

    function validateForm() { return usuario.length > 0 && password.length > 0; }

    return (
        <Fragment>
            {/** barra superior */}
            <nav className="navbar navbar-light bg-light">
                <Link to="/">
                    <a className="navbar-brand" href="!#">Excelsis</a>
                </Link>
            </nav>

            {/** card login */}
            <div className="row" style={{ marginTop: 40 }}>
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {estado ? <div className="alert alert-danger" role="alert">Usuario o Contraseña incorrectos</div> : ''}
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center">Inciar Sesión</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Ingresar Usuario</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={usuario}
                                        onChange={e => setUsuario(e.target.value)}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">Todos los datos ingresados estan protegidos</small>
                                </div>
                                <div className="form-group">
                                    <label>Ingresa Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" disabled={!validateForm()} className="btn btn-primary btn-block">Continuar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>

        </Fragment>
    );
}