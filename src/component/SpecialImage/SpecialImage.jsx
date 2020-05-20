import React, { Component } from 'react'

export default class SpecialImage extends Component {
    render() {
        let { img } = this.props;
        console.log(img);
        
        return (
            <div className="SpecialContent" >
                <div className="SpecialContent__img"> <img className="SpecialContent__img" src={img} alt="" /></div>
                <div className="wrap_text">
                    <h3 className="title">
                        MIZUNO RUNNING SHOES
                        </h3>
                    <button className="discover"> Discover Now </button>
                </div>
            </div>
        )
    }
}
