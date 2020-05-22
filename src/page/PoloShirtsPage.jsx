import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";
export default class PoloShirtsPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"MEN'S POLO SHIRTS"} />
        <TitlePageContainer title={"MEN'S POLO SHIRTS"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"poloshirts"}
        />
        <Footer />
      </div>
    );
  }
}
