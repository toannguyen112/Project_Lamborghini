import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";
import Back from "../Buttonback.jsx/Back";

export default class RMA extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="wrappAccount">
          <h2 className="title">RMA</h2>
          <Colappse />
          <div className="rmaContent">
            <button className="btnRequest">Request New RMA</button>
            <p className="noHaveRma">You have no RMA requests</p>
            <Back/>
          </div>
        </div>
      </div>
    );
  }
}
