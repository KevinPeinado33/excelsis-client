import React from 'react';

import imagen_vision from './imagen_vision.png';

export default function () {
    return (
        <div className="site-section bg-white">
            <div className="container">

                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center border-primary">
                        <h2 className="font-weight-light text-primary">Nuestros Ideales</h2>
                    </div>
                </div>

                <div className="slide-one-item home-slider owl-carousel">
                    <div>
                        <div className="testimonial">
                            <figure className="mb-4">
                                <img src={imagen_vision} alt="Image" className="img-fluid mb-3" />
                                <p>Misión</p>
                            </figure>
                            <blockquote>
                                <p>Somos una Institución Educativa Privada, basada en un innovador y moderno sistema educativo, conformado por un equipo de profesionales altamente calificados, comprometidos con la formación integral y el desarrollo de nuevas generaciones, mediante el  desarrollo de competencias, capacidades, actitudes y valores; para que su hijo actúe adecuada y eficazmente en los diversos ámbitos de la sociedad. Excelsis adoctrina a sus  estudiantes, no solo para ingresar a la universidad, sino para desenvolverse como líder, con capacidad para asumir los retos y desafíos que el futuro trae consigo. </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}