import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";
import WishItem from "../WishItem/WishItem";
import Back from "../Buttonback.jsx/Back";

export default class MyWishlist extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <div className="wrappAccount">
          <h2 className="title">MY WISHLIST</h2>
          <Colappse />
          {/* <div className="noti">
                       <p> You have no items in your wishlist..</p>
                       <button className="button">BACK</button>
                   </div> */}

          <div className="container-fluid">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>PRODUCT</th>
                  <th>QUANTITÀ</th>
                  <th>PRICE</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <WishItem />
                <WishItem />

                <WishItem />
              </tbody>
            </table>

            <div className="warppbtnMyWish  ">
              <div className="row">
                <div className="col-6">
                <Back />
                </div>
                <div className="col-6">
                  <div className="wappbtn--right">
                    <button className=" btnMutil mx-2 ">add all to cart</button>
                    <button className=" btnMutil mx-2 ">update</button>
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
