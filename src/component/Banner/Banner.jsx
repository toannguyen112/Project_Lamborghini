import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="wrapperBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <div className="banner-left">
                                <img src="https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2327-cnew.jpg" alt="" />
                                <div className="info">
                                    <div className="title-line"></div>
                                    <p className="info_title">
                                        AUTOMOBILI-LAMBORGHINI SNEAKERS
                                </p>
                                    <p className="info__content" >
                                        SPECIAL MIZUNO 1906 EDITION
                                </p>
                                    <p className="info__content" >
                                        SPECIAL MIZUNO 1906 EDITION
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="banner-right">
                                <img src="https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2305-590x394.jpg" alt="" />
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
