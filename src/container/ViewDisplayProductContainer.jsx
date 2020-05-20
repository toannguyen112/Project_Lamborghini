import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../component/ProductItem/ProductItem";
import ViewDisplayProduct from "../component/ViewDisplayProduct/ViewDisplayProduct";

export class ViewDisplayProductContainer extends Component {
  render() {
    let { view } = this.props;
    console.log(view);

    return <ViewDisplayProduct>{this.showProductItem()}</ViewDisplayProduct>;
  }

  showProductItem = () => {
    let result = [];
    for (let i = 0; i < 8; i++) {
      if(!this.props.view) {
        result.push(
          <div className="col-md-3 col-sm-12" key={i}>
            <ProductItem />
          </div>
        );
      }
      else {
        result.push(
          <div className="col-md-6 col-sm-12" key={i}>
            <ProductItem />
          </div>
        );
      }
     
    }

    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    view: state.TypeDisplayView
  };
};


export default connect(mapStateToProps,null)(ViewDisplayProductContainer);
