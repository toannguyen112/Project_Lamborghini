import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Colappse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
    };
  }

  componentDidMount() {
    console.log(window.location.pathname);

    this.setState({
      url: window.location.pathname,
    });
  }
  render() {
    console.log(this.state.url);

    return (
      <div className="Shipping">
        <div
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          className="myAccount"
        >
          MY ACCOUNT
          <i className="fa fa-chevron-down ml-3 " />
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <ul className="listIcon">
              <Link to="/customer/account/dashboard">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/dashboard"
                      ? "active"
                      : ""
                  }`}
                >
                  <i className="  mr-3 fa fa-user" />
                  <div className="text">Account Dashboard</div>
                </li>
              </Link>
              <Link to="/customer/account/infomation">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/infomation"
                      ? "active"
                      : ""
                  }`}
                >
                  <i className="  mr-3 fa fa-house-damage" />

                  <div className="text">Account Information</div>
                </li>
              </Link>

              <Link to="/customer/account/addnewadress">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/addnewadress"
                      ? "active"
                      : ""
                  }`}
                >
                  <i className="  mr-3 fa fa-book"></i>
                  <div className="text">Address Book</div>
                </li>
              </Link>

              <Link to="/customer/account/myorder">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/myorder"
                      ? "active"
                      : ""
                  }`}
                >
                  <i class="  mr-3 fab fa-first-order"></i>
                  <div className="text">My Orders</div>
                </li>
              </Link>

              <Link to="/customer/account/billing">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/billing"
                      ? "active"
                      : ""
                  }`}
                >
                  <i class="  mr-3 fa fa-credit-card"></i>
                  <div className="text">Billing Agreements</div>
                </li>
              </Link>
              <Link to="/customer/account/mywishlist">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/mywishlist"
                      ? "active"
                      : ""
                  }`}
                >
                  <i className="  mr-3 fa fa-star"></i>
                  <div className="text">My Wishlist</div>
                </li>
              </Link>

              <Link to="/customer/account/newsetter">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/newsetter"
                      ? "active"
                      : ""
                  }`}
                >
                  <i className="  mr-3 fa fa-envelope"></i>
                  <div className="text">Newsletter Subscriptions</div>
                </li>
              </Link>
              <Link to="/customer/account/rma">
                <li
                  className={`itemIcon ${
                    this.state.url === "/customer/account/rma" ? "active" : ""
                  }`}
                >
                  <i className="  mr-3 fab fa-cc-amazon-pay"></i>
                  <div className="text">RMA</div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
