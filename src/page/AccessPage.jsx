import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import  ViewDisplayProductContainer  from "../container/ViewDisplayProductContainer";
import  TitlePageContainer  from "../container/TitlePageContainer";


export default class AccessPage extends Component {
  

  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"ACCESSORIES"} />
        <TitlePageContainer  title={"ACCESSORIES"}  />
        <ViewDisplayProductContainer />
      </div>
    );
  }
}
