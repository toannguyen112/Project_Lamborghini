import React, { Component } from "react";
import SpecialImage from "../component/SpecialImage/SpecialImage";
import Footer from "../component/Footer/Footer";

const img = [
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2305-a-Sp.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/SP-LMB-2066-01.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/SP-LMB-2066-02.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/SP-LMB-2066-03.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/SP-LMB-2066-04.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-2357-snodo.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/SP-LMB-2066-06.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-1379-03-desk.01.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-1907-master-desk-Tecnomoster.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-1622.jpg",
  "https://static.lamborghinistore.com/media/widgets/resized/1700x/LMB-IXOOST-MAIN-01.jpg",
];

export default class SpecialPgae extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        {this.showItem()}
        <Footer />
      </div>
    );
  }
  showItem = () => {
    return img.map((item, index) => {
      return <SpecialImage img={item} key={index} />;
    });
  };
}
