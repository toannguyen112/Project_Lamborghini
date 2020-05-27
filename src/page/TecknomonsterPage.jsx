import React, { Component } from "react";
import Footer from "../component/Footer/Footer";
import Carousel from "../component/Carousel/Carousel";
import Banner from "../component/Banner/Banner";
import BestSellerContainer from "../container/BestSellerContainer";
const img = {
  img1:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-1886-master-bannerverticale-1_1.jpg",
  img2:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-1886-master-bannerorizzontale-3_1.jpg",
};

const imgCarousel = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/lmb-2493-desktop.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-1920-desk.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/3138-Desk.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/EM103647-desk.jpg",
];
export default class TecknomonsterPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Carousel imgCarousel={imgCarousel} />
        <Banner img={img} />
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
