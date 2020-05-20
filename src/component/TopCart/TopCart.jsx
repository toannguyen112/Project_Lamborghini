import React, { Component } from "react";
import ProductCart from "../ProductCart/ProductCart";

export default class TopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      type: "cart",
      search: false,
    };
  }

  showSearch = () => {
    this.setState({
      search: !this.state.search,
    });
  };

  showSidebarCartWhislist = (value) => {
    this.setState({
      show: !this.state.show,
      type: value,
    });
  };

  showOverPlay = () => {
    return this.state.show ? (
      <div
        className="overPlay"
        onClick={() => this.showSidebarCartWhislist()}
      ></div>
    ) : (
        ""
      );
  };

  render() {
    return (
      <div className="wrapperTopCart">
        <ul className="list">
          <li
            className="item cart "
            onClick={() => this.showSidebarCartWhislist("cart")}
          >
            <i className="fa fa-shopping-cart" />
            <span className="qty">1</span>
          </li>

          <li
            className="item whislist "
            onClick={() => this.showSidebarCartWhislist("whislist")}
          >
            <i className="fa fa-star" />
            <span className="qty">1</span>
          </li>

          <li className="item search " onClick={() => this.showSearch()}>
            <input
              type="text"
              placeholder="Search"
              className="inputSearch"
              style={{ width: this.state.search ? "165px" : " " }}
            ></input>
            <i className="fa fa-search" />
           
          </li>
        </ul>
        <div
          className=" box "
          style={{ transform: this.state.show ? "translateX(0)" : "" }}
        >
          <div
            className="btnclose"
            onClick={() => this.showSidebarCartWhislist("cart")}
          >
            <i className="fa fa-times" />
          </div>

          {this.state.type === "cart" ? (
            <div className="productDetail">
              {/* list product cart  */}
              <ProductCart />
              <ProductCart />
              <ProductCart />

              {/* end  */}

              <div className="payment">
                <div className="sub">
                  <span className="subBold"> Subtotal</span>{" "}
                  <span className="price">€ 310.00</span>
                </div>
                <div className="price-info">
                  <span className="legal-disclaimer">
                    (Tax incl., shipping cost excl.)
                  </span>
                </div>
                <div className="seeAll">SEE ALL</div>
                <div className="chekcout">CHECKOUT</div>
                <div className="or">- or -</div>
                <img
                  className="pay"
                  src="https://d23yuld0pofhhw.cloudfront.net/de/live/en_gb/amazonpay/gold/small/button_T5.png"
                  alt=""
                />
              </div>
            </div>
          ) : (
              <p className="alert">
                {" "}
              YOU HAVE NO ITEMS IN YOUR SHOPPING WHISLIST.
              </p>
            )}
        </div>
        {/* searchList */}

        <div className="wrappSearchItem">
        <ul className="searchList">
              <li className="searchList--item">
                <img className="img-fluid" src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/550x738/9df78eab33525d08d6e5fb8d27136e95/9/0/9010944llu205_01.jpg" alt="" />
                <div className="name">
                  Flyknit-technique sock shoe
                </div>
                <div className="price">
                  € 132.00
                </div>
              </li>
              <li className="searchList--item">
                <img className="img-fluid" src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/550x738/9df78eab33525d08d6e5fb8d27136e95/9/0/9010944llu205_01.jpg" alt="" />
                <div className="name">
                  Flyknit-technique sock shoe
                </div>
                <div className="price">
                  € 132.00
                </div>
              </li>
              <li className="searchList--item">
                <img className="img-fluid" src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/550x738/9df78eab33525d08d6e5fb8d27136e95/9/0/9010944llu205_01.jpg" alt="" />
                <div className="name">
                  Flyknit-technique sock shoe
                </div>
                <div className="price">
                  € 132.00
                </div>
              </li>
            </ul>
            <div className="allResoure">
              all resoure
            </div>
        </div>

        {this.showOverPlay()}
      </div>
    );
  }
}
