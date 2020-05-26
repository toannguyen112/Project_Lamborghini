import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";
import Back from "../Buttonback.jsx/Back";

export default class NewSetter extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="wrappAccount">
          <h2 className="title">NEWSLETTER SUBSCRIPTION</h2>
          <Colappse />
          <div className="Subscription">
            <form className="Subscription__form">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name
                    id
                    defaultValue="checkedValue"
                    defaultChecked
                  />
                  General Subscription
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name
                    id
                    defaultValue="checkedValue"
                    defaultChecked
                  />
                  Sign up to our newsletter
                  <br />
                  As an interested party, having read the Privacy Policy
                  statement drawn up pursuant to European regulation 2016/679, I
                  expressly consent to the processing of my personal data for
                  commercial purposes by LAMBORGHINI, including sending
                  marketing communications (using telematic methods - such as
                  for example newsletters and e- mail with invitations and
                  commercial communications - and traditional methods, such as
                  paper mail)
                </label>
              </div>
              <div className="wrapBtn">
                <div className="row">
                  <div className="col-6">
                    <Back />
                  </div>
                  <div className="col-6">
                    <button className="save  btn">save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
