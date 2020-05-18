import React, { Component } from 'react'

export default class TopCart extends Component {
    render() {
        return (
            <div className="wrapperTopCart" >
                <ul className="list">
                    <div className="item cart ">
                        <i className="fa fa-shopping-cart" />

                    </div>
                    <div className="item whislist ">
                   

                    </div>
                    <div className="item search ">

                    </div>
                </ul>
            </div>
        )
    }
}
