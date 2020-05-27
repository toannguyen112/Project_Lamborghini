import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
export default class Discover extends Component {
  render() {

    let { info } = this.props
    return (
      <div className="warpperSpecial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="special--left">
                <h3 className="special--left--title">
                  {info.title}
                </h3>
                <p className="special--left--info">
                  {info.des}
                </p>

                <button className="discover">discover the collection</button>
              </div>
            </div>
            <div className="col-6">
              <div className="special--right">
                <img
                  className="img-fluid"
                  src={info.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
