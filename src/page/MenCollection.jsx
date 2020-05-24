import React, { Component } from "react";
import Carousel from "../component/Carousel/Carousel";
import TitlePageContainer from "../container/TitlePageContainer";

import Footer from "../component/Footer/Footer";
import BestSellerContainer from "../container/BestSellerContainer";
const imgCarousel = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-3019-Desktop-04.jpg",
];
export default class MenCollection extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Carousel  imgCarousel={imgCarousel} />
        <TitlePageContainer title="SPRING/SUMMER 20" />

        <BestSellerContainer
          history={this.props.history}
          productType={"menCollection"}
        />

        <Footer />
      </div>
    );
  }
}
