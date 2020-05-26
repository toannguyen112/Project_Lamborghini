import React, { Component, Fragment } from "react";
import BestSellerContainer from "../container/BestSellerContainer";
import { Link } from "react-router-dom";

export default class CheckoutPage extends Component {
  totalPrice = () => {
    return this.props.cartList.reduce((tsl, product, index) => {
      return (tsl += product.qty * product.price);
    }, 0);
  };

  onClearCart = () => {
    this.props.onClearCart();
  };
  render() {
    let { cartList } = this.props;
    return (
      <Fragment>
        <div className="warpperBodyRigth">
        {cartList.length > 0 ? (
          <div className="container-fluid">
            <h3 className="titlePage">Shopping Cart</h3>
            <div className="warpperCheckout">
              <div className="row">
                <div className="col-xl-9 col-md-9 col-sm-12">
                  <div className="warpperCheckout--left">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>PRODUCT NAME</th>
                          <th>UNIT PRICE</th>
                          <th>QTY</th>
                          <th>SUBTOTAL</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>{this.props.children}</tbody>
                    </table>
                    <div className="warpperBtn">
                      <div className="btn--Left">
                        <button className=" btnColor continue">
                          Continue Shopping
                        </button>
                      </div>
                      <div className="btn-right">
                        <button className=" btnColor update mr-2 ">
                          Update Shopping Cart
                        </button>
                        <button
                          className=" btnColor clear"
                          onClick={() => this.onClearCart()}
                        >
                          Clear Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <BestSellerContainer
                    history={this.props.history}
                    productType={"bestSeller"}
                    title="YOU MAY ALSO LIKE"
                  />
                </div>
                <div className="col-xl-3 col-md-3 col-sm-12">
                  <div className="warpperCheckout--right">
                    <button className="btnProceed"> Proceed to Checkout</button>
                    <p className="text-center"> - OR - </p>
                    <div className="Shipping">
                      <div
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Shipping and taxes costs
                        <i className="fa fa-chevron-down ml-3 " />
                      </div>
                      <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                          <p className="enter">
                            Enter your destination to get a shipping estimate.
                          </p>

                          <div className="form-group">
                            <label>Country</label>
                            <select className="form-control" name="" id="">
                              <option>Belgium</option>
                              <option>Belgium</option>
                              <option>Belgium</option>
                            </select>
                          </div>
                          <div>
                            <div className="form-group">
                              <label />
                              State
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
                              <label />
                              Zip Code
                              <input
                                type="text"
                                className="form-control"
                                name
                                id
                                aria-describedby="helpId"
                                placeholder
                              />
                            </div>
                            <button className="getAquote">Get a Quote</button>
                            <p className="ship">Ship with</p>
                            <div className="standard">
                              <input type="radio" />
                              <span>Standard € 11.70</span>
                            </div>
                            <button className="updateToTal">
                              Update Total
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="disscount">
                      <p>DISCOUNT CODES</p>
                      <p className="code">
                        Enter your coupon code if you have one.{" "}
                      </p>
                      <input className="inpCode" type="text" />
                      <button className="apply">Apply Coupon</button>
                    </div>
                    <div className="total">
                      <h3 className="totalTitle">TOTAL PURCHASES</h3>
                      <div className="row totalBody">
                        <div className="col-sm-7">
                          <div className="text">Subtotal</div>
                          <div className="text">Grand Total Excl. Tax</div>
                          <div className="text">Tax</div>
                        </div>
                        <div className="col-sm-5">
                          <div className="text">€ {this.totalPrice()} </div>
                          <div className="text"> € 0</div>
                          <div className="text">€ 0</div>
                        </div>
                      </div>
                      <div className="grand">
                        <div className="row ">
                          <div className="col-sm-7">
                            <p>Grand Total Incl. Tax</p>
                          </div>
                          <div className="col-sm-5">
                            <p>€ {this.totalPrice()}</p>
                          </div>
                        </div>
                      </div>
                      <button className="btnProceed">
                        Proceed to Checkout
                      </button>
                      <p className="text-center"> - OR - </p>
                      <div className="Shipping">
                        <div
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Secure shopping
                        </div>
                        <p className="security">
                          Your security is important to us. For full details of
                          how we protect your payment and personal details,
                          please read our Privacy Statement.
                        </p>
                        <div className="">
                          <div className="row">
                            <div className="col-4">
                              <img
                                src="https://www.lamborghinistore.com/skin/frontend/lamborghini/responsive/img/verified-byVisa.png"
                                alt=""
                              />
                            </div>
                            <div className="col-4">
                              <img
                                src="https://www.lamborghinistore.com/skin/frontend/lamborghini/responsive/img/mastercard-securecode.png"
                                alt=""
                              />
                            </div>
                            <div className="col-4">
                              <img
                                src="https://www.lamborghinistore.com/skin/frontend/lamborghini/responsive/img/comodo-secure.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="noItemCart">
            <h3>Shopping Cart is Empty</h3>
            <p>You have no items in your shopping cart.</p>
            <Link to="/">Click here to continue shopping.</Link>
          </div>
        )}

      </div>
      </Fragment>
    );
  }
}
