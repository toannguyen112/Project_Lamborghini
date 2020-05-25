import React, { Component } from "react";

export default class AddNewAdreess extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
   <div className="wrappAccount">
        <h2 className="title">ADD NEW ADDRESS</h2>
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
                <li className="itemIcon">
                  <i className="  mr-3 fa fa-user" />
                  <div className="text">Account Dashboard</div>
                </li>
                <li className="itemIcon">
                  <i className="  mr-3 fa fa-house-damage" />

                  <div className="text">Account Information</div>
                </li>

                <li className="itemIcon">
                  <i className="  mr-3 fa fa-book"></i>
                  <div className="text">Address Book</div>
                </li>

                <li className="itemIcon">
                  <i class="  mr-3 fab fa-first-order"></i>
                  <div className="text">My Orders</div>
                </li>

                <li className="itemIcon">
                  <i class="  mr-3 fa fa-credit-card"></i>
                  <div className="text">Billing Agreements</div>
                </li>

                <li className="itemIcon">
                  <i className="  mr-3 fa fa-star"></i>
                  <div className="text">My Wishlist</div>
                </li>

                <li className="itemIcon">
                  <i className="  mr-3 fa fa-envelope"></i>
                  <div className="text">Newsletter Subscriptions</div>
                </li>
                <li className="itemIcon">
                  <i className="  mr-3 fab fa-cc-amazon-pay"></i>
                  <div className="text">RMA</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                  <button className="back">BACK</button>
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
