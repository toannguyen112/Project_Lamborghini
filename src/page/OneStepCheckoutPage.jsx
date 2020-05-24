import React, { Component } from "react";
import Amazon from "../component/AccountAmazon/Amazon";

export default class OneStepCheckoutPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="container-fluid">
          <h3 className="wrapperOneStep__title">CHECKOUT</h3>
          <p className="alerady">
            Already registered? Click here or connect with
          </p>
          <button className="btnface">facebook</button>
          <Amazon />
          <div className="payment">
            <div className="row">
              <div className="col-4">
                <div className="wrapper___BILLING ">
                  <h3 className="title">1. BILLING ADDRESS</h3>
                  <div className="form-group">
                    <label htmlFor>First Name *</label>
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
                    <label htmlFor>Last Name *</label>
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
                    <label htmlFor>Email Address *</label>
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
                    <label htmlFor>Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Country *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Zip Code * *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>State *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Company *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Fax *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>

                  <label>*Date of Birth</label>
                  <div className="row">
                    <div className="col-4">
                      <div class="form-group">
                        <select class="form-control" name="" id="">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                        <small>Month</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-group">
                        <select class="form-control" name="" id="">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                        <small>Month</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div class="form-group">
                        <select class="form-control" name="" id="">
                          <option></option>
                          <option></option>
                          <option></option>
                        </select>
                        <small>Month</small>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor>Password *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Confirm password *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      As an interested party, having read the Privacy Policy I
                      expressly consent to the processing of my personal data
                      for registration on the Site.
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Ship to the same address
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="warpper__shippingMethod">
                  <h3 className="title">2. SHIPPING METHOD</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Ship with Standard € 11.70
                    </label>
                  </div>
                  <h3 className="title">3. PAYMENT METHOD</h3>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      PayPal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Online bank transfer.
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      SEPA Bank Transfer
                    </label>
                  </div>
                </div>

                <div className="warpper__COUPON">
                  <h3 className="title">4. COUPON CODE</h3>
                  <p>Insert coupon code, if you have one.</p>
                  <div className="form-group">
                    <label htmlFor>Coupon code *</label>
                    <input
                      type="text"
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholde="Enter a location"
                    />
                  </div>
                  <button className="apply">Apply Coupon</button>
                </div>
              </div>
              <div className="col-4">
                <div className="warpper__review">
                  <h3 className="title">5. REVIEW YOUR ORDER</h3>
                  <table className="onestepcheckout">
                    <thead>
                      <tr>
                        <th className="product-info">PRODUCT</th>
                        <th className="qty">QTY</th>
                        <th className="total">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="col-product-info">
                          Automobili Lamborghini Squadra Corse Cap
                        </td>
                        <td className="qty">1</td>
                        <td className="total">€ 45.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="totals-bg">
                    <tbody>
                      <tr>
                        <td className="title"> Subtotal</td>
                        <td className="price">€ 45.00</td>
                      </tr>
                      <tr>
                        <td className="title"> Tax</td>
                        <td className="price">€ 9.84</td>
                      </tr>
                      <tr>
                        <td className="title" className="text-bold">
                          {" "}
                          Grand total
                        </td>
                        <td className="price  text-bold">€ 56.70</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="custom">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Sign up to our newsletter
                        <br />
                        As an interested party, having read the Privacy Policy
                        statement drawn up pursuant to European regulation
                        2016/679, I expressly consent to the processing of my
                        personal data for commercial purposes by LAMBORGHINI,
                        including sending marketing communications (using
                        telematic methods - such as for example newsletters and
                        e- mail with invitations and commercial communications -
                        and traditional methods, such as paper mail)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        I accept Terms & Conditions and privacy policy statement
                      </label>
                    </div>
                    <button className="placeOrder">Place order now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
