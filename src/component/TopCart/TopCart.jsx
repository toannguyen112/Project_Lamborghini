import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopWishItem from "../TopWishItem/TopWishItem";
import SearchItem from "../SearchItem/SearchItem";

export default class TopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      type: "cart",
      search: false,
      keyWord: "",
    };
  }

  handleChange = (event) => {
    this.setState({ keyWord: event.target.value }, () => {
      this.props.keyword(this.state.keyWord);
    });
  };

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

  showSearchItem = (productList, keyWord) => {
    let result = null;
    if (keyWord.length > 0 && keyWord.length !== "") {
      productList = productList.filter(
        (product) =>
          product.type.toLowerCase().indexOf(keyWord.toLowerCase().trim()) !==
          -1
      );

      result = productList.map((product, index) => {
        return <SearchItem product={product} key={index} />;
      });
    }
    return result;
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
  totalQty = () => {
    return this.props.cartList.reduce((tsl, product, index) => {
      return (tsl += product.qty);
    }, 0);
  };
  totalQtyOfWish = () => {
    return this.props.wishList.reduce((tsl, product, index) => {
      return (tsl += product.qty);
    }, 0);
  };
  totalPrice = () => {
    return this.props.cartList.reduce((tsl, product, index) => {
      return (tsl += product.qty * product.price);
    }, 0);
  };

  showWishItem = () => {
    return this.props.wishList.map((item, index) => {
      return (
        <TopWishItem
          product={item}
          key={index}
          addToCart={this.props.addToCart}
        />
      );
    });
  };

  render() {
    let { productList } = this.props;
    let { keyWord } = this.state;

    return (
      <div className="wrapperTopCart">
        <ul className="list">
          <li
            className="item cart "
            onClick={() => this.showSidebarCartWhislist("cart")}
          >
            <i className="fa fa-shopping-cart" />
            <span className="qty"> {this.totalQty()} </span>
          </li>

          <li
            className="item whislist "
            onClick={() => this.showSidebarCartWhislist("whislist")}
          >
            <i className="fa fa-star" />
            <span className="qty wish"> {this.totalQtyOfWish()} </span>
          </li>

          <li className="item search ">
            <div className="warpIconSearh" onClick={() => this.showSearch()} > <i className="fa fa-search" /></div>
            <div
              className={`wapSearch   ${this.state.search ? "active" : ""}  `}
            >
              <input
                onChange={this.handleChange}
                type="text"
                name="keyWord"
                placeholder="Search"
                className="inputSearch"
                value={this.state.keyWord}
              ></input>
            </div>
          </li>
        </ul>
        <div
          className=" box "
          style={{
            transform: this.state.show ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div
            className="btnclose"
            onClick={() => this.showSidebarCartWhislist("cart")}
          >
            <i className="fa fa-times" />
          </div>

          {this.state.type === "cart" ? (
            <div className="productDetail">
              {this.props.children}

              {this.props.cartList.length > 0    ? (
                <div className="payment">
                  <div className="sub">
                    <span className="subBold"> Subtotal</span>{" "}
                    <span className="price">€ {this.totalPrice()}</span>
                  </div>
                  <div className="price-info">
                    <span className="legal-disclaimer">
                      (Tax incl., shipping cost excl.)
                    </span>
                  </div>
                  <Link to="/checkout" style={{ color: "#000" }}>
                    <div className="seeAll">SEE ALL</div>
                  </Link>
                  <div className="chekcout">CHECKOUT</div>
                  <div className="or">- or -</div>
                  <img
                    className="pay"
                    src="https://d23yuld0pofhhw.cloudfront.net/de/live/en_gb/amazonpay/gold/small/button_T5.png"
                    alt=""
                  />
                </div>
              ) : (
                  ""
                )}
            </div>
          ) : (
              <div className="warpperWishList">
                <ul className="wishList">{this.showWishItem()}</ul>
                {this.props.wishList.length > 0 ? (
                  <div className="wappBtn">
                    <button className="goToWhiList">go to wishlist</button>
                  </div>
                ) : (
                    <p className="alert">
                      YOU HAVE NO ITEMS IN YOUR SHOPPING WHISLIST.
                    </p>
                  )}
              </div>
            )}
        </div>
        <div
          className="wrappSearchItem"
          style={{ display: keyWord && this.state.search  ? "block" : "none" }}
        >
          <ul className="searchList">
            {this.showSearchItem(productList, keyWord)}
          </ul>
          <Link to="/result" >
            <div className="allResoure">
              <button>
                all resoure
            </button>
            </div></Link>
        </div>

        {this.showOverPlay()}
      </div>
    );
  }
}
