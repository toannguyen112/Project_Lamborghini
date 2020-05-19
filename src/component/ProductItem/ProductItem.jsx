import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductItem extends Component {
    render() {
        return (
            <Link to="product" >
                <div className="product__item">
                <div className="product__img">
                    <img
                        className="img-fluid"
                        src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/550x738/9df78eab33525d08d6e5fb8d27136e95/9/0/9010944llu205_01.jpg"
                        alt=""
                    />
                </div>
                <div className="product_des">
                    <div className="title-line"></div>
                    <p className=" textBold  prduct__name">office chair</p>
                    <p className="product__price">€ 399.00</p>
                    <p className=" textBold  soldOut">sold out</p>
                </div>
                <button className="quickBuy">quick buy</button>
                <button className="goToDetailPage">go to product page</button>
            </div>
            </Link>
        )
    }
}
