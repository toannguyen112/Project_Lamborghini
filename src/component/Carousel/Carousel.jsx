import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    let {imgCarousel} = this.props
    return (
      <div className="wrappperCarousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {imgCarousel.map((image, index) => {
              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""} `}
                >
                  <img src={image} alt="..." />
                  <div className=" caption ">
                    <h3 className="namepr">Huracán</h3>
                    <p className="bgWhite">1:43 scale perfection</p>
                    <div className="cta-container">
                      <button className="discoverNow">discovery now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <i
              style={{ fontSize: "30px", color: "#CC0", marginRight: "100px" }}
              className="fa fa-chevron-left"
            />

            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <i
              style={{ fontSize: "30px", color: "#CC0", marginLeft: "100px" }}
              className="fa fa-chevron-right"
            />

            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
