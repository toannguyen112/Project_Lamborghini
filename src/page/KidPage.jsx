import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import TitlePageContainer from "../container/TitlePageContainer";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import Footer from "../component/Footer/Footer";
export default class KidPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"KIDS"} />
        <TitlePageContainer title={"KIDS"} />
        <ViewDisplayProductContainer
          history={this.props.history}
          productType={"kid"}
        />
        <Footer />
      </div>
    );
  }
}
