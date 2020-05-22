import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import ViewDisplayProductContainer from "../container/ViewDisplayProductContainer";
import TitlePageContainer from "../container/TitlePageContainer";

export default class CollectiblesPage extends Component {
  render() {
    return (
        <div className="warpperBodyRigth">
        <Breadcrumb title={"COLLECTIBLES"} />
        <TitlePageContainer  title={"COLLECTIBLES"}  />
        <ViewDisplayProductContainer  history={this.props.history}  productType={"collecibles"} />
      </div>
    )
  }
}
