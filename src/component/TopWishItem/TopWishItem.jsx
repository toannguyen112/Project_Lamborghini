import React, { Component } from "react";

export default class TopWishItem extends Component {
  onAddToCart = (product) => {
    this.props.addToCart(product);
  };
  render() {
    let { product } = this.props;
    return (
      <li className="wishList__item">
        <img src={product.image} alt="" />
        <div className="warp__name">
          <p className="name">Lamborghini kids’ Bull LXIII polo shirt</p>
          <i className="fa fa-times"> </i>
        </div>
        <p className="price"> € {product.price} </p>
        <button className="addCart" onClick={() => this.onAddToCart(product)}>
          add to cart
        </button>
      </li>
    );
  }
}
