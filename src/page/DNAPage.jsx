import React, { Component } from "react";

import Footer from "../component/Footer/Footer";
import Carousel from "../component/Carousel/Carousel";
import Discover from "../component/Discover/Discover";
import Banner from "../component/Banner/Banner";
const imgCarousel = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-LMB-2871-main-desk-B.jpg",
];
const img = {
  img1:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2871-left.jpg",
  img2:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2871-right.jpg",
};
const info = {
  img:
    "https://static.lamborghinistore.com/media/widgets/resized/590x/LMB-2871-right.jpg",
  title: "A MADE IN ITALY MASTERPIECE",
  des:
    "The official book of Automobili Lamborghini handcrafted from the Publishing House D'Oro Collection is a masterpiece of Historical renovation and craftsmanship in a limited edition of 250 numbered copies. Over three hundred pages written by Antonio Ghini and illustrated by Mitja Borkert tell with passion the true story of the Bull's House and for the first time ever, they illustrate all the Lamborghini cars made from 1963 till today with pictures, descriptive texts and techincal pages. DNA Lamborghini is printed in numbered copies fully handmade.",
};

export default class DNAPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Carousel imgCarousel={imgCarousel} />
        <Discover info={info} />
        <Banner img={img} />
        <Footer />
      </div>
    );
  }
}
