import React, { useState, Fragment } from 'react';

import axios from 'axios';
import { API_BASE_URL } from '../../config/Configuracion';

export default function Informe() {

    const [nombres, setNombres] = useState('');
    const [numCelular, setNumCelular] = useState('');
    const [nivel, setNivel] = useState('');

    const [estado, setEstado] = useState(1); // [1] estado neutro, [2] error, [3] correcto

    function registrarInteresado(event) {
        event.preventDefault();
        const url = `${API_BASE_URL}/interesado/registrar-nuevo-interesado`;
        axios.post(url, { nombres, numCelular, nivel })
            .then(response => {
                if (response.status === 200) {
                    setNombres('');
                    setNumCelular('');
                    setNivel('');
                    setEstado(3);
                } else { setEstado(2); }
            });
    }

    if(estado === 3) { setTimeout(() => {setEstado(1)}, 6000)}

    function validarFormulario() {
        return nombres.length > 0 && numCelular.length > 0 && nivel.length > 0;
    }

    return (
        <Fragment>
            <form onSubmit={registrarInteresado}>
                {estado===2 ? <div className="alert alert-danger" role="alert"><i className="ti-alert menu-icon"></i> Ocurrio un error al registrar al enviar los datos, por favor recarge la pagina</div> : ''}
                <div className="row align-items-center">
                    <div className="col-lg-12 mb-4 mb-xl-0 col-xl-4">
                        <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Nombre Del Familiar"
                            value={nombres}
                            onChange={e => setNombres(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                        <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Nro. celular"
                            value={numCelular}
                            maxLength='9'
                            onChange={e => setNumCelular(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                        <div className="select-wrap">
                            <span className="icon"><span className="icon-keyboard_arrow_down"></span></span>
                            <select
                                className="form-control rounded"
                                value={nivel}
                                onChange={e => setNivel(e.target.value)}
                            >
                                <option value="" disabled>Nivel</option>
                                <option value="Inicial">Incial</option>
                                <option value="Primaria">Primaria</option>
                                <option value="Secundaria">Secundaria</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-2 ml-auto text-right">
                        <input type="submit" className="btn btn-primary btn-block rounded" value="Enviar" disabled={!validarFormulario()} />
                    </div>
                </div>
            </form>
            <div style={{marginTop: 20}}>
                {estado === 3 ? <div className="alert alert-success" role="alert"><i className="ti-check-box menu-icon"></i> Registrado Correctamente</div> : ''}
            </div>
        </Fragment>
    )
}