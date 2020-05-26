import React, { Component } from "react";
import Colappse from "../Collapse/Colappse";
import Back from "../Buttonback.jsx/Back";

export default class MyOrder extends Component {
    render() {
        return (
            <div className="warpperBodyRigth">
                <div className="wrappAccount">
                    <h2 className="title">MY ORDERS</h2>
                    <Colappse />
                    <div className="noti">
                        <p> You have placed no orders.</p>
                        <Back />
                    </div>
                </div>
            </div>

        );
    }
}
