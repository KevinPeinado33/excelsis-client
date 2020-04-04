import React from 'react';

import imagen_mision from './imagen_mision.png';
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
                                <img src={imagen_mision} alt="Image" className="img-fluid mb-3" />
                                <p>Misión</p>
                            </figure>
                            <blockquote>
                                <p>
                                    Somos una Institución Educativa Privada, basada en un moderno sistema
                                    educativo. Conformado por un equipo de profesionales altamente
                                    calificados, comprometidos con la formación y el desarrollo de nuevas
                                    generaciones; mediante el desarrollo de competencias, capacidades,
                                    actitudes y valores, que utilizará el estudiante al interactuar en los
                                    diversos ámbitos de la sociedad.
                                </p>
                            </blockquote>
                        </div>

                    </div>
                    <div>
                        <div className="testimonial">
                            <figure className="mb-4">
                                <img src={imagen_vision} alt="Image" className="img-fluid mb-3" />
                                <p>Visión</p>
                            </figure>
                            <blockquote>
                                <p>EXCELSIS formará en el 2025, estudiantes altamente competitivos,
                                creativos, con cultura investigativa y calidad humana, que lo convierte en
                                agentes de cambio, capaces de afrontar con éxito, retos que la sociedad
                                actual le propone y sepa actuar adecuada y eficazmente a lo largo de
                                toda su vida.
                                </p>
                            </blockquote>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}