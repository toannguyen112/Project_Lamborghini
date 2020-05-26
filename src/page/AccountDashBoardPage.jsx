import React, { Component } from "react";
import Footer from "../component/Footer/Footer";
import MyDashboard from "../component/MyDashboard/MyDashboard";


export default class AccountDashBoardPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <MyDashboard />
        <Footer />
      </div>
    );
  }
}
