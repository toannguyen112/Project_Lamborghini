import React, { Component } from "react";
import { connect } from "react-redux";
import TopCart from "../component/TopCart/TopCart";
import ProductCart from "../component/ProductCart/ProductCart";
import * as action from '../Store/Action/action'
export class TopCartContainer extends Component {
    render() {
        const { cartList } = this.props;

        return <TopCart  cartList={cartList}  >{this.showProductCart(cartList)}</TopCart>;
    }

    showProductCart = (cartList) => {
        if (cartList && cartList.length > 0) {
            return cartList.map((product, index) => {
                return <ProductCart onDeleteCartItem={this.props.onDeleteCartItem} product={product} key={index} />;
            });
        } else {
            return <p className="alert"> YOU HAVE NO ITEMS IN YOUR SHOPPING CART.</p>;
        }
    };
    
}

const mapStateToProps = (state) => ({
    cartList: state.Cart,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCartItem: (id) => {
            (dispatch(action.deleteCart(id)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopCartContainer);
