import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div className="wrappperCarousel">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2929-2.jpg" alt="..." />
                        <div className=" caption ">
                            <h3 className="namepr">
                                Huracán
                            </h3>
                            <p className="bgWhite">
                                1:43 scale perfection
                            </p>
                            <div className="cta-container">
                                <button className="discoverNow" >
                                   discovery now
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                    <img src="https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2929-2.jpg" alt="..." />
                        <div className=" caption ">
                            <h3 className="namepr">
                                Huracán
                            </h3>
                            <p className="bgWhite">
                                1:43 scale perfection
                            </p>
                            <div className="cta-container">
                                <button className="discoverNow" >
                                   discovery now
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                    <img src="https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2929-2.jpg" alt="..." />
                        <div className=" caption ">
                            <h3 className="namepr">
                                Huracán
                            </h3>
                            <p className="bgWhite">
                                1:43 scale perfection
                            </p>
                            <div className="cta-container">
                                <button className="discoverNow" >
                                   discovery now
                            </button>
                            </div>
                        </div>
                    </div>
                
                    

                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
        )
    }
}
