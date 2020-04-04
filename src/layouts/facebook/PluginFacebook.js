import React, { Fragment } from 'react';

import './style-home.css';

export default function PluginFacebook() {
    return (
        <Fragment>
            <div className="row justify-content-center mb-5 mt-5">
                <div className="col-md-7 text-center border-primary">
                    <h2 className="font-weight-light text-primary">Nuestra Fanpage En Facebook</h2>
                </div>
            </div>

            <div className="container row">
                <div className="col-md-5"></div>
                <div className="col-md-4">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FC.Excelsis&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=715239785661427" width="340" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" className="pagina"></iframe>
                </div>
                <div className="col-md-2"></div>
            </div>
        </Fragment>
    )
}