import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import CartItem from "../component/CartItem/CartItem";
import CheckoutPage from "../page/CheckoutPage";
import * as action from "../Store/Action/action";
export class CheckoutContainer extends Component {
  render() {
    let { cartList } = this.props;
    console.log(cartList);

    return (
      <CheckoutPage cartList={cartList}  onClearCart={this.props.onClearCart} >
        {this.showCartItem(cartList)}
      </CheckoutPage>
    );
  }

  showCartItem = (cartList) => {
    return cartList.map((cart, index) => {
      return <CartItem  ondDeleteCartItem={this.props.ondDeleteCartItem}  cart={cart} key={index} />;
    });
  };
}

const mapStateToProps = (state) => {
  return {
    cartList: state.Cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ondDeleteCartItem: (id) => {
      dispatch(action.deleteCart(id));
    },
    onClearCart: () => {
      dispatch(action.clearCart())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
