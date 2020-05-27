import React, { Component } from "react";

import Footer from "../component/Footer/Footer";
import Carousel from "../component/Carousel/Carousel";
import BestSellerContainer from "../container/BestSellerContainer";
import Discover from "../component/Discover/Discover";
const imgCarousel = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2305-a-Desktop.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2305-b-Desktop.jpg",
];
const info = {
  img : "https://static.lamborghinistore.com/media/widgets/resized/920x/LMB-2305-p-production.jpg",
  title : "GROUNDBREAKING RUNNING TECHNOLOGY",
  des : "The new Wave Tenjin 4 is the epitome of extreme technology and design dedicated to the running universe. Its Smooth-Ride sole converts weight into thrust, reducing the load on the joints. A blend of rubber and carbon fibre on the X10 sole maximises stability and automatically regulates to achieve the right degree of rigidity. Designed with a new outsole providing outstanding grip even on wet surfaces. Breathability and pure energy come into their own with the vamp design inspired by the iconic Y shape, symbolising the headlamps of the Supercars from Sant’Agata. Lamborghini Wave Tenjin 4 by Mizuno: Groundbreaking Running Technology"

}

export default class MizunoPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Carousel imgCarousel={imgCarousel} />
        <Discover info={info} />
        <BestSellerContainer
          history={this.props.history}
          productType={"mizuno"}
          title="THE MIZUNO RANGE"
        />
        <Footer />
      </div>
    );
  }
}
