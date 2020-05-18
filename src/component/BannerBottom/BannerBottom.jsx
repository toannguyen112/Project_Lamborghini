import React, { Component } from "react";

export default class BannerBottom extends Component {
  render() {
    return (
      <div className="wrapperBannerBottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="bannerBot--left  bannerBottomItem ">
                <div className="bannerBotImg">
                  <img
                    src="
                  https://static.lamborghinistore.com/media/widgets/resized/550x/LMB-2688-550x824-EN-00.jpg"
                    alt=""
                    className="bannerBot__img img-fluid "
                  />
                </div>
                <div className="line-title"></div>
                <div className="info">
                    <p className="dis" >Discover all our previews</p>
                    <p className="sub" >
                        SUBSCRIBE NOW
                    </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="bannerBot--right  bannerBottomItem ">
                <div className="bannerBotImg">
                  <img
                    src="
                         https://static.lamborghinistore.com/media/widgets/resized/650x/Banner-ss-20-altre-lingue.jpg"
                    alt=""
                    className="bannerBot__img img-fluid "
                  />
                </div>
                <div className="line-title"></div>
                <div className="info">
                    <p className="dis" >Discover all our previews</p>
                    <p className="sub" >
                        SUBSCRIBE NOW
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
