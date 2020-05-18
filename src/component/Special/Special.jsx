import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
export default class Special extends Component {
  render() {
    return (
      <div className="warpperSpecial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="special--left">
                <h3 className="special--left--title">TECKNOMONSTER LUGGAGE</h3>
                <p className="special--left--info">
                  New generation luggage. Carbon fibre, with a leather interior
                  utilising the same leather as in the cars. Cutting edge
                  design, for an enduring, timeless collection.
                </p>
                <div className="social">
                  <i className="fab fa-twitter" />
                  <i className="fab fa-facebook-f" />
                  <i className="fab fa-pinterest" />
                </div>
                <button className="discover">discover the collection</button>
              </div>
            </div>
            <div className="col-6">
              <div className="special--right">
                <ReactCompareImage
                  sliderLineColor="#e5e5e5"
                  leftImage="https://static.lamborghinistore.com/media/widgets/resized/920x/LMB-Tech-BOX2B-01_b.jpg"
                  rightImage="https://static.lamborghinistore.com/media/widgets/resized/920x/LMB-Tech-BOX2A-01_a.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
