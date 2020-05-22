import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";
export default class LuxuryPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"Luxury"} />
        <TitlePageContainer title={"Luxury"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"Luxury"}
        />
        <Footer />
      </div>
    );
  }
}
