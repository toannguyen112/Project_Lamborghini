import React, { Component } from "react";

export default class AccountPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="wrappAccount">
          <h2 className="title">MY DASHBOARD</h2>
          <div className="wrappColapse">
            <div
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              className="text"
            >
              Shipping and taxes costs
              <i className="fa fa-chevron-down ml-3 " />
            </div>
            <div className="collapse" id="collapseExample">
                <div className="card">
                <ul className="list">
                <li className="item">Account Information</li>
                <li className="item">Account Information</li>
                <li className="item">Account Information</li>
              </ul>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
