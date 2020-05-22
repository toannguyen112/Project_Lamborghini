import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";
export default class LeatherGoodsPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"LEATHER GOODS"} />
        <TitlePageContainer title={"LEATHER GOODS"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"LeatherGoods"}
        />
        <Footer />
      </div>
    );
  }
}
