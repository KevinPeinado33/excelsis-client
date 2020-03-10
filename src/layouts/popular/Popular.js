import React, { Fragment } from 'react';

import Foto_1 from './foto_1.jpeg';
import Foto_2 from './foto_2.jpeg';
import Foto_3 from './foto_3.jpeg';
import Foto_4 from './foto_4.jpeg';
import Foto_5 from './foto_5.jpeg';

export default function Popular() {
    return (
        <Fragment>
            <div className="row justify-content-center mb-5">
                <div className="col-md-7 text-center border-primary">
                    <h2 className="font-weight-light text-primary">Recuerdos Populares</h2>
                    <p className="color-black-opacity-5">Recuerdos Importantes De Nuestros Eventos Y Aniversarios Con Nuestros Jovenes Del Futuro</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_1} alt="fotoA" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Nombramiento</a>
                            <h2 className="mb-1"><a href="!#">Alumnos Reconocidos</a></h2>
                            <span className="address">Lambayaque, Sede Central</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_2}  alt="fotoD" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Desfile</a>
                            <h2 className="mb-1"><a href="!#">Desfile Escolar Nivel Secundario</a></h2>
                            <span className="address">Lambayeque, Plaza</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_3} alt="fotoE" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Evento Escolar</a>
                            <h2 className="mb-1"><a href="!#">Dia Del Logro</a></h2>
                            <span className="address">Lambayaque, Sede Central</span>
                        </div>
                    </div>

                </div>

                <div className="col-md-6 mb-4 mb-lg-4 col-lg-6">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_4} alt="fotoB" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Desfile</a>
                            <h2 className="mb-1"><a href="!#">Desfile De Pancartas</a></h2>
                            <span className="address">Lambayaque, Sede Central</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-6">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_5} alt="fotoC" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Desfile</a>
                            <h2 className="mb-1"><a href="!#">Defile Escolar Nivel Primario</a></h2>
                            <span className="address">Lambayeque, Plaza</span>
                        </div>
                    </div>

                </div>


            </div>
        </Fragment>
    )
}