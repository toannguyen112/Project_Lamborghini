import React, { Component } from "react";
import Login from "../component/Login/Login";
import Footer from "../component/Footer/Footer";
import { Link } from "react-router-dom";
import Amazon from "../component/AccountAmazon/Amazon";


export default class LoginPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="container-fluid">
          <div className="registerAlert">
            <h3 className="register">REGISTER</h3>
            <div className="registerAlert__bot">
              <div className="row">
                <div className="col-md-9 col-sm-12">
                  <p className="text">
                    By creating an account with our store, you will be able to
                    move through the checkout process faster, store multiple
                    shipping addresses, view and track your orders in your
                    account and more.
                  </p>
                </div>
                <div className="col-md-3 col-sm-12">
                  <Link to="/register">
                    <div className="register">Register</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <h3 className="loginTitle">LOGIN</h3>
          <Login />
          <Amazon/>
          <div className="loginWithSocial">
          <h3 className="loginWithSocial__title" >
              LOGIN WITH SOCIAL
            </h3>
            <div className="row buttonSocial">
              <div className="col-md-6 col-sm-12">
                <h3 className="des_text">
                  You can login using your Google account.
                </h3>
                <button className="btn__loginSocial  btnGG " >
                  Login <span className="iconSocial" >
                    <i className="fab fa-google-plus-g" />

                  </span>
                </button>
              </div>
              <div className="col-md-6 col-sm-12">
                <h3 className="des_text">
                  You can login using your Google account.
                </h3>
                <button className="btn__loginSocial  btnface " >
                  Accedi <span className="iconSocial" >
                    <i className="fab fa-facebook-f" />

                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
