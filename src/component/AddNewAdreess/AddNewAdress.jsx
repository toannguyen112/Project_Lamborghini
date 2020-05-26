import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";
import Back from "../Buttonback.jsx/Back";

export default class AddNewAdreess extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="wrappAccount">
          <h2 className="title">ADD NEW ADDRESS</h2>
          <Colappse />

          <div className="warpperEdit">
            <div className="container-fluid">
              <form action="">
                <h3>CONTACT INFORMATION</h3>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>first name</label>
                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                    <div className="form-group">
                      <label>Telephone</label>
                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>Last Name</label>

                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                    <div className="form-group">
                      <label>FAX</label>

                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mt-4" >ADDRESS</h3>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                    <div className="form-group">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label>State</label>

                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                    <div className="form-group">
                      <label>Country</label>

                      <input
                        type="text"
                        className="form-control"
                        name
                        id
                        aria-describedby="helpId"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="warppbtn">
                  <div className="row">
                    <div className="col-6">
                    <Back />
                    </div>
                    <div className="col-6">
                      <button className="save">SAVE adress</button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
