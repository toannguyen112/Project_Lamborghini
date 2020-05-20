import React, { Component } from 'react'
export default class ViewDisplayProduct extends Component {


    render() {
        return (
            <div className="products">
                <div className="container-fluid" style={{paddingRight:" 150px"}} >
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
