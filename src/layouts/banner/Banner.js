import React from 'react';
import './style-banner.css'

import Informe from '../informes/Informe';

export default function Banner() {
    return (
        <div className="site-blocks-cover overlay banner-a" data-aos="fade"
            data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">

                    <div className="col-md-12">


                        <div className="row justify-content-center mb-4">
                            <div className="col-md-8 text-center">
                                <h1 className="" data-aos="fade-up">Colegio Excelsis</h1>
                                <p data-aos="fade-up" data-aos-delay="100">Calidad y Prestigio en Preparación</p>
                            </div>
                        </div>

                        <div className="form-search-wrap" data-aos="fade-up" data-aos-delay="200">
                            <Informe />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}