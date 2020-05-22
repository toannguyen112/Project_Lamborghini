import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default class ProductList extends Component {
  render() {
    let { title } = this.props
    return (
      <div className="warpperBest">
        <h3 className="warpperBest__title"> {title} </h3>
        <div className="warpperBest__products">
          <OwlCarousel className="owl-theme" loop items={4} nav  >
            {this.props.children}
          </OwlCarousel>

        </div>
      </div>
    );
  }
}
