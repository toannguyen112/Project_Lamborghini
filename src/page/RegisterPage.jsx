import React, { Component } from "react";
import Amazon from "../component/AccountAmazon/Amazon";
import Footer from "../component/Footer/Footer";

const style = {
  textAlign: "center",
  fontSize: "15px",
  fontWeight: 700,
  paddingTop: "20px",
  letterSpacing: "2px",
};
export default class RegisterPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="box" style={{ padding: "0 100px" }}>
          <div className="page__title  " style={style}>
            CREATE AN ACCOUNT
          </div>
          <div className="" style={{ padding: "20px" }}>
            <Amazon />
          </div>
          <div className="wrapper__resgiter">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 col-sm-12 ">
                  <div className="Wrap__formRegister">
                    <h3 className="title">PERSONAL INFORMATION</h3>
                    <form className="formRes">
                      <div className="row wrapForm">
                        <div className="col-6">
                          <div className="form--left">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                *First Name
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Email Address
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                              />
                            </div>

                            <div>
                              <p className="genger">Gender</p>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  defaultValue="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio1"
                                >
                                  M
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio2"
                                >
                                  Mrs
                                </label>
                              </div>

                              <div className="form-group  password ">
                                <label htmlFor="exampleInputEmail1">
                                  Password*
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="gridCheck"
                                  >
                                    Sign up to our newsletter
                                    <br />
                                    As an interested party, having read the
                                    Privacy Policy statement drawn up pursuant
                                    to European regulation 2016/679, I expressly
                                    consent to the processing of my personal
                                    data for commercial purposes by LAMBORGHINI,
                                    including sending marketing communications
                                    (using telematic methods - such as for
                                    example newsletters and e- mail with
                                    invitations and commercial communications -
                                    and traditional methods, such as paper mail)
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form--right">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                *Last Name
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Country
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                              />
                            </div>
                            <div className="form-group ">
                              <label htmlFor="exampleInputEmail1">
                                *Date of Birth
                              </label>
                              <div className="wrapDate d-flex ">
                                <select
                                  className="form-control"
                                  id="exampleFormControlSelect1"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                                <select
                                  className="form-control"
                                  id="exampleFormControlSelect1"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                                <select
                                  className="form-control"
                                  id="exampleFormControlSelect1"
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Confirm Password*
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                              />
                            </div>
                            <div className="form-group">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridCheck"
                                >
                                  As an interested party, having read the
                                  Privacy Policy I expressly consent to the
                                  processing of my personal data for
                                  registration on the Site.
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row wrapButton ">
                        <div className="col-6">
                          <div className="back">Back</div>
                        </div>
                        <div className="col-6">
                          <div className="submit">submit</div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 ">
                  <div className="wrap__fastLogin">
                    <h3 className="title_fast">FAST LOGIN</h3>
                    <p className="des">
                      You can register using your Facebook, Google or Paypal
                      account.
                    </p>
                    <div className="wraperBtn">
                      <button className="res">
                        Register <i className="fab fa-google-plus-g" />
                      </button>
                      <button className="accedi">
                        accedi
                        <i className="fab fa-facebook-f" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
