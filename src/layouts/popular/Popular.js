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
                    <p className="color-black-opacity-5">Recuerdos Importantes De Nuestros Eventos Y Aniversarios Con Nuestros Jóvenes Del Futuro</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_1} alt="fotoA" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Pulcritud, Presencia y Seguridad</a>
                            <h2 className="mb-1"><a href="https://www.youtube.com/watch?v=Qru0_GPJsCM">Excelsis Nivel Secundario</a></h2>
                            <span className="address">Lambayeque, Sede Central</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_2}  alt="fotoD" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="/">Cadencia, Gallardía y Elegancia</a>
                            <h2 className="mb-1"><a href="https://www.youtube.com/watch?v=zfEB4TzjNeE">Escolta de la Institución Educativa Excelsis</a></h2>
                            <span className="address">Plaza de Armas 27 Diciembre - Lambayeque</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-4">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_3} alt="fotoE" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="/">Vocación y Amor al Enseñar</a>
                            <h2 className="mb-1"><a href="https://www.youtube.com/watch?v=WV1s38y2yUI">Interactuando con los niños Nivel Inicial</a></h2>
                            <span className="address">Lambayeque, Sede Central</span>
                        </div>
                    </div>

                </div>

                <div className="col-md-6 mb-4 mb-lg-4 col-lg-6">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_4} alt="fotoB" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="/">Tutoría y Orientación del Educando</a>
                            <h2 className="mb-1"><a href="https://www.youtube.com/watch?v=YxBnG_HUaDE">Intitución Educativa Excelsis</a></h2>
                            <span className="address">Lambayeque, Sede Central</span>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 mb-4 mb-lg-4 col-lg-6">

                    <div className="listing-item">
                        <div className="listing-image">
                            <img src={Foto_5} alt="fotoC" className="img-fluid" />
                        </div>
                        <div className="listing-item-content">
                            <a className="px-3 mb-3 category" href="!#">Desfile Escolar</a>
                            <h2 className="mb-1"><a href="!#">Nivel Inicial, Primaria y Secundaria</a></h2>
                            <span className="address">Lambayeque, Plaza</span>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}