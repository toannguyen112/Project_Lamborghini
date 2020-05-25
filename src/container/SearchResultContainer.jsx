import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import ProductItem from "../component/ProductItem/ProductItem";

export class SearchResultContainer extends Component {
  showProductItem = (productList, keyword) => {
    let result = null;
    if (keyword.length > 0 && keyword.length !== "") {
      productList = productList.filter(
        (product) =>
          product.type.toLowerCase().indexOf(keyword.toLowerCase().trim()) !==
          -1
      );
      result = productList.map((product, index) => {
        return (
          <div className="col-3" key={index}>
            <ProductItem history={this.props.history} product={product} />
          </div>
        );
      });
    }

    return result;
  };
  render() {
    let { keyword, productList } = this.props;
    console.log(keyword);

    return (
      <Fragment>
        <Breadcrumb title={`Search results for ${keyword}`} />
        <h5 className="text-center">Did you mean {keyword}?</h5>
        <h3 className="text-center">SEARCH RESULTS FOR '{keyword}'</h3>
        <div className="row">{this.showProductItem(productList, keyword)}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  keyword: state.keyword,
  productList: state.Products,
});

export default connect(mapStateToProps)(SearchResultContainer);
