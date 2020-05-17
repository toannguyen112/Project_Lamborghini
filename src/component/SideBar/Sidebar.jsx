import React, { Component } from "react";
import ItemCategory from "./ItemCategory";

class Sidebar extends Component {
  showCate() {
    let result = [];
    for (let i = 0; i < 9; i++) {
      result.push(<ItemCategory />);
    }
    return result;
  }

  render() {
    return (
      <div className="warpperSidebar">
        <div className="logo">
          <img
            className="logo__img"
            src="https://www.lamborghinistore.com/skin/frontend/lamborghini/responsive/img/logo.png"
            alt=""
          />
        </div>
        <ul className="listCategory">{this.showCate()}</ul>

        <ul className="listSocial">
          <li className="listSocial--item">
            <span>Newsletter</span>
          </li>
          <li className="listSocial--item">
            <span>my account</span>
          </li>
          <li className="listSocial--item">
            <span>
              Newsletter <i class="fa fa-caret-down"></i>{" "}
            </span>
          </li>
          <li className="listSocial--item">
            <span>
              Newsletter <i class="fa fa-caret-down"></i>{" "}
            </span>
          </li>
          <li className="  social listSocial--item">
            <i className=" social--icon fab fa-facebook-f" />
            <i className=" social--icon fab fa-twitter" />
            <i className=" social--icon fab fa-youtube" />
            <i className=" social--icon fab fa-instagram" />
            <i className=" social--icon fab fa-pinterest" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
