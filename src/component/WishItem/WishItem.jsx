import React, { Component } from 'react'

export default class WishItem extends Component {
    render() {
        return (
            <tr>
            <td>
              <img
                src="https://static.lamborghinistore.com/media/catalog/product/cache/1/thumbnail/100x/040ec09b1e35df139433887a97daa66f/9/0/9010852ccb000_01.jpg"
                alt=""
              />
            </td>
            <td>Lamborghini kids’ Bull LXIII polo shirt</td>
            <td>1</td>
            <td>€ 65.00</td>
            <td>
              <button className="addtocart"> add to cart</button>
            </td>
            <td>
              <i className="fa fa-times"></i>
            </td>
          </tr>
        )
    }
}
