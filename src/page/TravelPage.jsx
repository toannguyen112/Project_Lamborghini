import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePage from "../component/TitlePage/TitlePage";
import ProductItem from "../component/ProductItem/ProductItem";
import Footer from "../component/Footer/Footer";

export default class TravelPage extends Component {
    showProduct = () => {
        let result = [];

        for (let i = 0; i < 10; i++) {
            result.push(
                <div className="col-3" key={i} >
                    <ProductItem />
                </div>
            );
        }
        return result;
    };
    render() {
        return (
            <div className="warpperBodyRigth">
                <Breadcrumb title={"TRAVEL"}  />
                <TitlePage  title={"travel"} />
                <div className="container-fluid" style={{ paddingRight: "150px" }} >
                    <div className="row">{this.showProduct()}</div>
                </div>
                <Footer />
            </div>


        );
    }
}
