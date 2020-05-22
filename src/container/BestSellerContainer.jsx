import React, { Component } from "react";
import ProductList from "../component/ProductList/ProductList";
import { connect } from "react-redux";
import * as action from "../Store/Action/action";
import ProductItem from "../component/ProductItem/ProductItem";


export class BestSellerContainer extends Component {
  render() {
    let { productList, productType, history, title } = this.props;

    return (
      <ProductList title={title}>
        {this.showProductItem(productList, productType, history)}
      </ProductList>
    );
  }
  showProductItem = (productList, productType, history) => {
    let result = [];
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].type === productType)
        result.push(<ProductItem addToCart={this.props.addToCart} key={i} product={productList[i]} history={history} />);
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    productList: state.Products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cart) => {
      dispatch(action.addToCart(cart));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestSellerContainer);
