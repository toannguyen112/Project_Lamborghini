import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";
import Back from "../Buttonback.jsx/Back";

export default class AccountInfomation extends Component {
  render() {
    return (

      <div className="warpperBodyRigth">
 <div className="wrappAccount">
        <h2 className="title">EDIT ACCOUNT INFORMATION</h2>
         <Colappse/>

        <div className="warpperEdit">
          <div className="container-fluid">
            <form action="">
            <h3>ACCOUNT INFORMATION</h3>
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
                  <label>Email</label>
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
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <div className="row">
                        <div className="col">
                          {" "}
                          <select className="form-control" name="" id="">
                            <option></option>
                            <option></option>
                            <option></option>
                          </select>
                        </div>

                        <div className="col">
                          {" "}
                          <select className="form-control" name="" id="">
                            <option></option>
                            <option></option>
                            <option></option>
                          </select>
                        </div>

                        <div className="col">
                          {" "}
                          <select className="form-control" name="" id="">
                            <option></option>
                            <option></option>
                            <option></option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Country</label>

                      <select className="form-control" name="" id="">
                            <option></option>
                            <option></option>
                            <option></option>
                          </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </form>
            <div className="warppbtn">
              <div className="row">
                <div className="col-6">
                <Back />
                </div>
                <div className="col-6">
                  <button className="save">SAVE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    );
  }
}
