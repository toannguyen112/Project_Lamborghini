import React, { Component } from 'react'
import Colappse from '../Collapse/Colappse'
import { Link } from 'react-router-dom'
const arrAccountCategory = [

]
export default class MyDashboard extends Component {
  render() {
    return (
      <div className="wrappAccount">
        <h2 className="title">MY DASHBOARD</h2>
        <Colappse />
        <div className="wrappAccount__body">
          <div className="container-fluid">
            <div className="row list ">
              <Link className="col-md-3 col-sm-12" to="/customer/account/dashboard" >
                <div className="item  active">
                  <i className="fa fa-user" />

                  <div className="text">Account Dashboard</div>
                </div>
              </Link>

              <Link className="col-md-3 col-sm-12" to="/customer/account/infomation" >
                <div className="item">
                  <i className="fa fa-house-damage" />

                  <div className="text">Account Information</div>
                </div>
              </Link>

              <Link className="col-md-3 col-sm-12" to="/customer/account/addnewadress" >
                <div className="item">
                  <i className="fa fa-book"></i>
                  <div className="text">Address Book</div>
                </div>
              </Link>
              <Link to="/customer/account/myorder" className="col-md-3 col-sm-12">
                <div className="item">
                  <i class="fab fa-first-order"></i>
                  <div className="text">My Orders</div>
                </div>
              </Link>
            </div>

            <div className="row list ">
              <Link to="/customer/account/billing" className="col-md-3 col-sm-12">
                <div className="item">
                  <i class="fa fa-credit-card"></i>
                  <div className="text">Billing Agreements</div>
                </div>
              </Link>
              <Link to="/customer/account/mywishlist" className="col-md-3 col-sm-12">
                <div className="item">
                  <i className="fa fa-star"></i>
                  <div className="text">My Wishlist</div>
                </div>
              </Link>
              <Link to="/customer/account/newsetter" className="col-md-3 col-sm-12">
                <div className="item">
                  <i className="fa fa-envelope"></i>
                  <div className="text">Newsletter Subscriptions</div>
                </div>
              </Link>
              <Link to="/customer/account/rma" className="col-md-3 col-sm-12">
                <div className="item">
                  <i className="fab fa-cc-amazon-pay"></i>
                  <div className="text">RMA</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
