import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ProductItem from "../component/ProductItem/ProductItem";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";

import Footer from "../component/Footer/Footer";

export default class TravelPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <Breadcrumb title={"TRAVEL"} />
                <TitlePageContainer title={"TRAVEL"} />
                <ViewDisplayProductContainer />
                <Footer />

            </div>
        );
    }
}
