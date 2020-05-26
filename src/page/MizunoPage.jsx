import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";

import Footer from "../component/Footer/Footer";
import Carousel from "../component/Carousel/Carousel";
import Special from "../component/Special/Special";
import BestSellerContainer from "../container/BestSellerContainer";
const imgCarousel = [
    "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2305-a-Desktop.jpg",
    "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2305-b-Desktop.jpg",
];

export default class MizunoPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <Carousel imgCarousel={imgCarousel} />
                <Special />
                <BestSellerContainer
                    history={this.props.history}
                    productType={"men"}
                    title="THE MIZUNO RANGE"
                />
                <Footer />
            </div>
        );
    }
}
