import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        let {title} = this.props
        return (
            <nav aria-label="breadcrumb" style={{ background: "#fff" }} >
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item " > {title} </li>
                </ol>
            </nav>

        )
    }
}
