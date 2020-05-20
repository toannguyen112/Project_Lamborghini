import React, { Component } from "react";
import ItemCategory from "./ItemCategory";
import { Link } from "react-router-dom";
const arrCatefory = [
  {
    name: "MID SEASON SALE",
    route: "/",
    cate: ["outerwear", "Sweatshirts & Knitwear", "Polo Shirts"],
  },
  {
    name: "travel",
    route: "travel",
    cate: [
      "Backpack & Bags",
      "Leather Goods",
      "Small Leather Goods",
      "Trolley",
    ],
  },
  {
    name: "men collection",
    route: "mencollection",
    cate: [
      "Backpack & Bags",
      "Leather Goods",
      "Small Leather Goods",
      "Trolley",
    ],
  },
  {
    name: "accessories",
    route: "accessories",
    cate: ["leathergoods", "leathergoods"],
  },
  {
    name: "baby & junior",
    route: "baby",
    cate: ["outerwear", "leathergoods"],
  },
  {
    name: "Collectibles",

    route: "collectibles",
    cate: ["outerwear", "leathergoods"],
  },
  {
    name: "Squadra Corse",

    route: "squadra",
    cate: ["outerwear", "leathergoods"],
  },
  {
    name: "Shop By Car",

    route: "shopbycar",
    cate: ["Terzo Millennio", "Urus", "Huracán", "Aventador"],
  },
  {
    name: "Special Edition",
    route: "special",
    cate: ["outerwear", "leathergoods"],
  },
];
class Sidebar extends Component {
  showCate() {
    let result = [];
    for (let i = 0; i < 9; i++) {
      result.push(<ItemCategory key={i} categoryItem={arrCatefory[i]} />);
    }
    return result;
  }

  render() {
    return (
      <div className="warpperSidebar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }} >
            <img
              className="logo__img"
              src="https://www.lamborghinistore.com/skin/frontend/lamborghini/responsive/img/logo.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="listCategory">{this.showCate()}</ul>

        <ul className="listSocial">
          <li className="listSocial--item">
            <span>Newsletter</span>
          </li>
          <Link to="/login">
            <li className="listSocial--item" >
              <span>my account</span>
            </li>
          </Link>
          <li className="listSocial--item">
            <span>
              Belgium <i className="fa fa-caret-down" />{" "}
            </span>
          </li>
          <li className="listSocial--item">
            <span>
              English <i className="fa fa-caret-down" />{" "}
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
