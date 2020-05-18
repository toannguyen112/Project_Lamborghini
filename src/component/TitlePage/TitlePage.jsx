import React, { Component } from 'react'

export default class TitlePage extends Component {
    render() {
        let {title} =this.props
        return (
            <div className="titlePage">
                <h3 className='titlePage__text' >
                    {title}
            </h3>
                <p className="typeDisplay" >
                    View large images
            </p>
            </div>
        )
    }
}
