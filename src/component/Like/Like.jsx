import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default class Like extends Component {
    render() {
        return (
            <div className="warperLike" >
                <h3 className="title_like text-center "  style={style} >
                YOU MAY ALSO LIKE
                    </h3>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <ProductItem />
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <ProductItem />
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <ProductItem />
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <ProductItem />
                        </div>
                    </div>
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
