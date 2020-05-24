import React, { Component } from "react";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quickBuy: false,
    };
  }
  onQuickBuy = () => {
    this.setState({
      quickBuy: !this.state.quickBuy,
    });
  };

  showAddToCart = (product) => {
    if (this.state.quickBuy) {
      return (
        <div className="wrapBtnAddToCart">
          <div className="form-group">
            <label htmlFor>SIZE</label>
            <select className="form-control" name id>
              <option>Select size</option>
              <option>M</option>
              <option>XL</option>
            </select>
          </div>
          <button
            className="addToCart"
            onClick={() => this.onAddToCart(product)}
          >
            {" "}
            add to cart{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div className="wrappBtn ">
          <button className="quickBuy" onClick={() => this.onQuickBuy()}>
            quick buy
          </button>
          <button className="goToDetailPage" onClick={()=>this.toProduct(product.id)}  >go to product page</button>
        </div>
      );
    }
  };
  toProduct = (id) => {
    this.props.history.push(`/product/${id}`);
    window.location.reload();
  };
  onAddToCart = (cart) => {
   

    this.props.addToCart(cart);
    this.setState({
      quickBuy : !this.state.quickBuy
    })
  };

  render() {
    let { product } = this.props;

    return (
      <div
        className="product__item"
        style={{ border: this.state.quickBuy ? "1px solid #000" : "" }}
      >
        <div
          className="product__img"
          onClick={() => this.toProduct(product.id)}
        >
          <img className="img-fluid" src={product.image} alt="" />
        </div>

        <div className="product_des">
          <div className="title-line"></div>
          <p className=" textBold  prduct__name"> {product.name} </p>
          <p className="product__price"> {product.price} </p>
          {/* <p className=" textBold  soldOut">sold out</p> */}
          {this.showAddToCart(product)}
        </div>
      </div>
    );
  }
}
