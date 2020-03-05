import React from 'react';

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
                                <img src="images/person_3.jpg" alt="Image" className="img-fluid mb-3" />
                                <p>Misión</p>
                            </figure>
                            <blockquote>
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit
                                  aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt
                  consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial">
                            <figure className="mb-4">
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid mb-3" />
                                <p>Visión</p>
                            </figure>
                            <blockquote>
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit
                                  aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt
                  consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                        </div>
                    </div>

                    <div>
                        <div className="testimonial">
                            <figure className="mb-4">
                                <img src="images/person_4.jpg" alt="Image" className="img-fluid mb-3" />
                                <p>Lema</p>
                            </figure>
                            <blockquote>
                                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit
                                  aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt
                  consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                            </blockquote>
                        </div>
                    </div>  

                </div>
            </div>
        </div>
    )
}