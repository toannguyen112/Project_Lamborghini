import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import ProductItem from "../ProductItem/ProductItem";

export default class BestSeller extends Component {
  render() {
    return (
      <div className="warpperBest">
        <h3 className="warpperBest__title">best sellers</h3>
        <div className="warpperBest__products">
          <OwlCarousel className="owl-theme" loop items={4} nav  >
            <ProductItem />
          </OwlCarousel>

        </div>
      </div>
    );
  }
}
