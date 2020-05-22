import React, { Component } from "react";

export default class CartItem extends Component {
  onDeleteCartitem = (id) => {
    this.props.ondDeleteCartItem(id);
  };
  render() {
    let { image, qty, price, name } = this.props.cart;
    return (
      <tr>
        <td>
          <img src={image} alt="" />
        </td>
        <td className="des">
          {name}
          <p>size: One size</p>
        </td>
        <td className="price">€ {price}</td>
        <td className="qty"> {qty} </td>
        <td className="sub">€ {price * qty} </td>
        <td>
          <i
            className="fa fa-times"
            onClick={() => this.onDeleteCartitem()}
          ></i>
        </td>
      </tr>
    );
  }
}
