import React, { Fragment } from 'react';

import './style-home.css';

export default function PluginFacebook() {
    return (
        <Fragment>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FC.Excelsis&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=715239785661427" width="340" height="350" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" className="pagina"></iframe>
        </Fragment>
    )
}