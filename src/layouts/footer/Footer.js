import React from 'react';

export default function Footer() {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-5">
                                <h2 className="footer-heading mb-4">Sobre Nosotros</h2>
                                <p>
                                    Somos una institución educativa, que desea ayudar a la comunidad formando estudiantes
                                    con valores y capacidades para forjar un mejor futuro.
                                </p>
                            </div>

                            <div className="col-md-5">
                                <h2 className="footer-heading mb-4">Contáctenos</h2>
                                <ul className="list-unstyled">
                                    <li><a href="/"><i className="ti-mobile menu-icon"></i> 074-310005</a></li>
                                    <li><a href="/"><i className="ti-email menu-icon"></i> excelsisinstitucioneducativa@gmail.com</a></li>
                                    <li><a href="/"><i className="ti-direction menu-icon"></i> 28 de Julio 846 Lambayeque</a></li>
                                </ul>
                            </div>

                            <div className="col-md-2">
                                <h2 className="footer-heading mb-4">Síguenos en ...</h2>
                                <a href="https://www.facebook.com/C.Excelsis?_rdc=1&_rdr" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                <a href="https://www.youtube.com/channel/UCM3ukR-wJYnHd1uTIBh02jw" className="pl-3 pr-3"><span className="icon-youtube"></span></a>
                                {/**<a href="!#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <div className="border-top pt-5">
                            <p>
                                Copyright &copy; 2020 All rights reserved with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://attomsoft-company.github.io/webpage-attomsoft/">AttomSoft</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}