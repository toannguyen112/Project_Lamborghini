import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";

export default class MidSeasonPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
            <Breadcrumb title={"MID SEASON SALE 30% OFF"} />
            <TitlePageContainer title={"MID SEASON SALE 30% OFF"} />
            <ViewDisplayProductContainer  history={this.props.history}  productType={"midseason"} />
            <Footer />

        </div>
        )
    }
}
