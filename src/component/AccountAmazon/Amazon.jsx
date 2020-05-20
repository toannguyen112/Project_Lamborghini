import React, { Component } from "react";

export default class Amazon extends Component {
  render() {
    return (
      <div className="WithAmazon">
        <h3 className="WithAmazon__title">USE YOUR AMAZON ACCOUNT</h3>
        <p className="WithAmazon__des">
          With Amazon Pay, you can use the shipping and payment information
          stored in your Amazon account to place an order on this website. It's
          a convenient and trusted way to pay that's enjoyed by millions of
          people. By selecting Login with Amazon, you will be asked to sign-in
          securely to your Amazon account without leaving the shop.
        </p>
        <div className="imgAmazon">
          <img
            src="https://d23yuld0pofhhw.cloudfront.net/default/de/en_GB/live/lwa/gold/small/LwA.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
