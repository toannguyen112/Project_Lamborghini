import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../component/ProductItem/ProductItem";
import ViewDisplayProduct from "../component/ViewDisplayProduct/ViewDisplayProduct";
import * as action from "../Store/Action/action";
export class ViewDisplayProductContainer extends Component {
  render() {
    let { view, productsList, productType, history } = this.props;
    console.log(productsList);

    return (
      <ViewDisplayProduct>
        {this.showProductItem(view, productsList, productType, history)}
      </ViewDisplayProduct>
    );
  }

  showProductItem = (view, productsList, productType, history) => {
    let result = [];
    for (let i = 0; i < productsList.length; i++) {
      if (productsList[i].type === productType) {
        if (!view) {
          result.push(
            <div className="col-md-3 col-sm-12" key={i}>
              <ProductItem
                addToCart={this.props.addToCart}
                history={history}
                product={productsList[i]}
              />
            </div>
          );
        } else {
          result.push(
            <div className="col-md-6 col-sm-12" key={i}>
              <ProductItem
                addToCart={this.props.addToCart}
                history={history}
                product={productsList[i]}
              />
            </div>
          );
        }
      }
    }

    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    view: state.TypeDisplayView,
    productsList: state.Products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cart) => {
      dispatch(action.addToCart(cart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDisplayProductContainer);
