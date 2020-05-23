import React, { Component } from "react";
import { connect } from "react-redux";
import TopCart from "../component/TopCart/TopCart";
import ProductCart from "../component/ProductCart/ProductCart";
import * as action from "../Store/Action/action";
export class TopCartContainer extends Component {
  render() {
    const { cartList, wishList, productList } = this.props;

    return (
      <TopCart
        productList={productList}
        wishList={wishList}
        cartList={cartList}
        addToCart={this.props.addToCart}
        keyword={this.props.keyword}
      >
        {this.showProductCart(cartList)}
      </TopCart>
    );
  }

  showProductCart = (cartList) => {
    if (cartList && cartList.length > 0) {
      return cartList.map((product, index) => {
        return (
          <ProductCart
            onDeleteCartItem={this.props.onDeleteCartItem}
            product={product}
            key={index}
          />
        );
      });
    } else {
      return <p className="alert"> YOU HAVE NO ITEMS IN YOUR SHOPPING CART.</p>;
    }
  };
}

const mapStateToProps = (state) => ({
  cartList: state.Cart,
  wishList: state.Wish,
  productList: state.Products
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCartItem: (id) => {
      dispatch(action.deleteCart(id));
    },
    addToCart: (product) => {
      dispatch(action.addToCart(product));
    },
    keyword: (key) => {
      dispatch(action.keyWord(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopCartContainer);
