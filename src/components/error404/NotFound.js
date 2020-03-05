import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return(
        <div className="row" style={{marginTop: 250}}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h3 className="text-center">Esta url es invalida | <Link to="/">Volvamos al principio.</Link></h3>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}