import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Back extends Component {
  render() {
    return (
      <Link to="/customer/account/dashboard" className="back  btn">
        back
      </Link>
    );
  }
}
