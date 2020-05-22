import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";
export default class CosmeticPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"Cosmetics"} />
        <TitlePageContainer title={"Cosmetics"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"Cosmetics"}
        />
        <Footer />
      </div>
    );
  }
}
