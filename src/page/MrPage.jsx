import React, { Component } from "react";

import Footer from "../component/Footer/Footer";
import Carousel from "../component/Carousel/Carousel";
import BestSellerContainer from "../container/BestSellerContainer";
import Discover from "../component/Discover/Discover";
const imgCarousel = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-1996-2-master.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2091-03-desktop.jpg",
];

const info = {
  img : "https://static.lamborghinistore.com/media/widgets/resized/920x/centenario.jpeg",
  title : "THE PERFECT COPY",
  des : "Created from original designs by Lamborghini's Centro Stile, the reproductions of the world's most desirable cars are made with the utmost accuracy and precision. Model cars which bring alive the legendary Lamborghini cars"

}


export default class MrPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Carousel imgCarousel={imgCarousel} />
        <Discover info={info} />
        <BestSellerContainer
          history={this.props.history}
          productType={"tecknomonster"}
          title="TECKNOMONSTER COLLECTION"
        />
        <Footer />
      </div>
    );
  }
}
