import React, { Component } from "react";
import Footer from "../component/Footer/Footer";
import MyDashboard from "../component/MyDashboard/MyDashboard";
import AccountInfomation from "../component/AccountInfomation/AccountInfomation";
import AddNewAdreess from "../component/AddNewAdreess/AddNewAdress";
import MyOrder from "../component/MyOrder/MyOrder";
import Billing from "../component/Billing/Billing";
import MyWishlist from "../component/MyWishlist/MyWishlist";

export default class AccountPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        {/* <MyDashboard /> */}
        {/* <AccountInfomation/> */}
        {/* <AddNewAdreess/> */}
        {/* <MyOrder/> */}
        {/* <Billing/> */}
        <MyWishlist/>
        <Footer />
      </div>
    );
  }
}
