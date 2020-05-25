import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";

export default class Billing extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="wrappAccount">
          <h2 className="title">BILLING AGREEMENTS</h2>
          <Colappse />
          <div className="noti">
            <p> There are no billing agreements yet.</p>
            <div>
              <i class="fa fa-long-arrow-alt-left"></i> Back
            </div>
          </div>
        </div>
      </div>
    );
  }
}
