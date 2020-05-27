import React, { Component } from "react";
import Footer from "../component/Footer/Footer";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <div className="wrapper__notfound">
                    <div className="container">
                        <h3 className="title">MAYBE, YOU PICKED THE WRONG DIRECTION...</h3>
                        <p>THE WEBPAGE YOU ARE LOOKING FOR, IS NOT AVAILABLE</p>
                        <p>Make a U-turn... and</p>
                        <Link to="/" >
                            <p className="back" > BACK TO THE HOME PAGE</p>
                        </Link>

                        <img src="https://static.lamborghinistore.com/media/wysiwyg/404/404.jpg" alt="" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
