import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer_top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                {" "}
                                <ul className="listContact">
                                    <li className="listContact__item">
                                        <span> Social Links</span>
                                    </li>
                                    <li className="listContact__item">
                                        <span>Social Links</span>
                                    </li>
                                    <li className="listContact__item">
                                        <span> Social Links</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="customercare ">
                                    <li className="customercare__item">
                                        <span>Customer Care</span>
                                    </li>
                                    <li className="customercare__item">
                                        <span>Terms & Conditions</span>
                                    </li>
                                    <li className=" button customercare__item">
                                        <button className="btn__down">
                                            <i className="fa fa-angle-down" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bot">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <p className="footer_bot__text">
                                    LAMBORGHINI STORE - Via Modena 12, Sant’Agata Bolognese (BO)
                                    Italia - p.iva 00591801204 | REA BO 259882 | Powered by FiloBlu
                                    | COPYRIGHT © 2020
              </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
