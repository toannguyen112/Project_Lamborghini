import React, { Component } from 'react'

export default class ProductCart extends Component {
    render() {
        return (
            <div className="productCart">
            <img src="https://static.lamborghinistore.com/media/catalog/product/cache/1/thumbnail/109x/9df78eab33525d08d6e5fb8d27136e95/9/0/9012861yyb065_01b.jpg" alt="" className="product__img" />
            <div className="product__des">
                <h3 className="product__name" >
                    AUTOMOBILI LAMBORGHINI WAVE TENJIN 4 RUNNING SHOES BY MIZUNO
            </h3>
                <p className="productSize">
                    SIZE 40 QTY 1
            </p>
                <p className="product__price" >
                    € 310.00
                <span className="close_product">
                        <i className="fa fa-times" />
                    </span>
                </p>
            </div>
            
        </div>
        )
    }
}
