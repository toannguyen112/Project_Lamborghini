import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let { img } = this.props;

        return (
            <div className="wrapperBanner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">

                            <div className="banner-left">
                                <div className="img__banner">

                                    <img src={img.img1} alt="" className="img-fluid"  />
                                </div>
                                <div className="info">
                                    <div className="title-line"></div>
                                    <p className="info_title">
                                        AUTOMOBILI-LAMBORGHINI SNEAKERS
                                </p>
                                    <p className="info__content" >
                                        SPECIAL MIZUNO 1906 EDITION
                                </p>
                                    <p className="info__content" >
                                        Discover the collection
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="banner-right">
                                <div className="img__banner">
                                    <img src={img.img2} alt=""className="img-fluid"   />
                                </div>
                                <div className="content__right">
                                    <div className="title">
                                        <h3>MIZUNO FOR AUTOMOBILI LAMBORGHINI</h3>
                                        <p className="des" >
                                            Two past masters have joined forces so you can benefit from hi-tech design and comfort every day. Outperformance to the extreme with these Wave Tenjin 4s, the most technological running shoe on the market is into its fourth edition. Unmistakeable urban elegance and supreme comfort with the new all-season sneakers from Lamborghini.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
