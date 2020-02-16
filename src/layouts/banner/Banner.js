import React from 'react';
import './style-banner.css'

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
                            <form >
                                <div className="row align-items-center">
                                    <div className="col-lg-12 mb-4 mb-xl-0 col-xl-4">
                                        <input type="text" className="form-control rounded"
                                            placeholder="Nombre Del Familiar" />
                                    </div>
                                    <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                                        <input type="text" className="form-control rounded" placeholder="Nro. celular" />
                                    </div>
                                    <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                                        <div className="select-wrap">
                                            <span className="icon"><span className="icon-keyboard_arrow_down"></span></span>
                                            <select className="form-control rounded" name="" id="">
                                                <option value="">Incial</option>
                                                <option value="">Primaria</option>
                                                <option value="">Secundaria</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-2 ml-auto text-right">
                                        {/**<input type="submit" className="btn btn-primary btn-block rounded" value="Enviar">*/}
                                        <input type="submit" className="btn btn-primary btn-block rounded" value="Enviar" />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}