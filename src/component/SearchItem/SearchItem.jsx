import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SearchItem extends Component {
  toDetail = (product) => {
    window.location.replace(`/product/${product.id}`);
  };
  render() {
    let { product } = this.props;
    return (
      <li className="searchList--item" onClick={() => this.toDetail(product)}>
        <img className="img-fluid" src={product.image} alt="" />
        <div className="name">Flyknit-technique sock shoe</div>
        <div className="price">€ {product.price}</div>
      </li>
    );
  }
}
