import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCart extends Component {
  onDeleteCart = (id) => {
    this.props.onDeleteCartItem(id);
  };
  render() {
    let { image, price, name, id, qty } = this.props.product;
    return (
      <div className="productCart">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="product__img img-fluid " />
        </Link>
        <div className="product__des">
          <h3 className="product__name">{name}</h3>

          <p className="productSize">SIZE 40 QTY {qty} </p>
          <p className="product__price">
            {price}
            <span
              className="close_product"
              onClick={() => this.onDeleteCart(id)}
            >
              <i className="fa fa-times" />
            </span>
          </p>
        </div>
      </div>
    );
  }
}
