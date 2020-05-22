import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import  BestSellerContainer  from '../../container/BestSellerContainer'

export default class Like extends Component {
    render() {
        return (
            <div className="warperLike" >
                <h3 className="title_like text-center "  style={style} >
                YOU MAY ALSO LIKE
                    </h3>
                <div className="container-fluid">
                 <BestSellerContainer  history={this.props.history}  productType={"bestSeller"} />

                </div>

            </div>
        )
    }
}

const style = {
    fontSize : "18px",
    marginBottom : "30px",
    fontWeight : "400"
    
}
