import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../component/ProductItem/ProductItem";
import ViewDisplayProduct from "../component/ViewDisplayProduct/ViewDisplayProduct";
import * as action from "../Store/Action/action";
import _ from "lodash";
export class ViewDisplayProductContainer extends Component {
  render() {
    let { view, productsList, productType, history, sortType } = this.props;

    return (
      <ViewDisplayProduct>
        {this.showProductItem(
          view,
          productsList,
          productType,
          history,
          sortType
        )}
      </ViewDisplayProduct>
    );
  }

  sortProduct = (productsList, sortType) => {
    if (sortType === "name-ascending") {
      productsList = productsList.sort((a, b) => {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortType === "name-descending") {
      productsList = productsList.sort((a, b) => {
        var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
        if (nameA > nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortType === "price-ascending") {
      productsList = productsList.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortType === "price-descending") {
      productsList = productsList.sort((a, b) => {
        return b.price - a.price;
      });
    }

    return productsList;
  };

  showProductItem = (view, productsList, productType, history, sortType) => {
    this.sortProduct(productsList, sortType);

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
    sortType: state.Sort,
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
)(ViewDisplayProductContainer);
