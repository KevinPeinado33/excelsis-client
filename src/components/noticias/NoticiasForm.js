import React from 'react';

export default function NoticiasForm() {
    return (
        <div className="row">
            <div className="col-md-12">
                <h3>Registrar Noticia Nueva</h3>
                <div className="row" style={{ marginTop: 30 }}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Titulo de la noticias</label>
                            <input type="text" className="form-control" />
                            <small className="form-text text-muted">Ingrese el titulo de la noticia</small>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label>Categoria</label>
                            <input type="text" className="form-control" />
                            <small className="form-text text-muted">Categoria de la noticia</small>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Imagen banner</label>
                            <input type="file" className="form-control-file" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label>Lugar</label>
                            <input type="text" className="form-control" />
                            <small className="form-text text-muted">Ingrese el lugar donde se hara el evento</small>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary">Agregar Noticia +</button>
                    </div>
                </div>
            </div>
        </div>
    )
}