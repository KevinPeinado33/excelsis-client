import React, { Fragment } from 'react';

export default function Ubicacion() {
    return (
        <Fragment>
            <div className="row justify-content-center mb-5">
                <div className="col-md-7 text-center border-primary">
                    <h2 className="font-weight-light text-primary">Nuestra Ubicación</h2>
                </div>
            </div>
            <div className="embed-responsive embed-responsive-21by9">
                <iframe 
                    title="miUbicacion"
                    className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3469376969033!2d-79.90876205852466!3d-6.704815411525975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ced920583e035%3A0xe2480f3e7d674bac!2sExcelsis!5e0!3m2!1ses!2sit!4v1583389402149!5m2!1ses!2sit" 
                    width="600" 
                    height="450" 
                    frameBorder="0" 
                    style={{border:0}} />
            </div>
        </Fragment>
    )
}