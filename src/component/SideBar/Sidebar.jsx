import React, { Component } from "react";
import ItemCategory from "./ItemCategory";
import { Link } from "react-router-dom";
const arrCatefory = [
  {
    name: "MID SEASON SALE",
    route: "midseason",
    cate: [
      {
        cateName: "outerwear",
        cateRoute: "outerwear",
      },
      {
        cateName: "Sweatshirts & Knitwear",
        cateRoute: "SweatshirtsKnitwear",
      },
      {
        cateName: " Polo Shirts",
        cateRoute: "PoloShirts",
      },
    ],
  },
  {
    name: "travel",
    route: "travel",

    cate: [
      {
        cateName: "Backpack & Bags",
        cateRoute: "BackpackBags",
      },
      {
        cateName: "Leather Goods",
        cateRoute: "LeatherGoods",
      },
      {
        cateName: "Small Leather Goods",
        cateRoute: "SmallLeatherGoods",
      },
      {
        cateName: "Trolley",
        cateRoute: "Trolley",
      },
    ],
  },
  {
    name: "men collection",
    route: "mencollection",
    cate: [
      {
        cateName: "T shirt",
        cateRoute: "tshirt",
      },
      
    ],
  },
  {
    name: "accessories",
    route: "accessories",
    cate: [
      {
        cateName: "Ties & Cufflinks",
        cateRoute: "TiesCufflinks",
      },
      {
        cateName: "Headwear",
        cateRoute: "Headwear",
      },
      {
        cateName: "Footwear",
        cateRoute: "Footwear",
      },


      {
        cateName: "Cosmetics",
        cateRoute: "Cosmetics",
      },
    ]
  },
  {
    name: "baby & junior",
    route: "baby",
    cate: [
      // {
      //   cateName: "Backpack & Bags",
      //   cateRoute: "BackpackBags",
      // },
      // {
      //   cateName: "Leather Goods",
      //   cateRoute: "LeatherGoods",
      // },
      // {
      //   cateName: "Small Leather Goods",
      //   cateRoute: "SmallLeatherGoods",
      // },
    ]
  },
  {
    name: "Collectibles",

    route: "collectibles",
    cate: [
      {
        cateName: "Luxury",
        cateRoute: "Luxury",
      },
      {
        cateName: "Cases & Hi-Tech",
        cateRoute: "Cases-Hi-Tech",
      },
     
    ]
  },
  {
    name: "Squadra Corse",

    route: "squadra",
    cate: [
      {
        cateName: "Men",
        cateRoute: "men",
      },
      {
        cateName: "women",
        cateRoute: "women",
      },
      {
        cateName: "kid",
        cateRoute: "kid",
      },
    ]
  },

  {
    name: "Special Edition",
    route: "special",
    cate: [
      {
        cateName: "Mizuno Running Shoes",
        cateRoute: "mizuno",
      },
      {
        cateName: "TecknoMonster Luggage",
        cateRoute: "tecknomonster",
      },
      {
        cateName: "MR & Looksmart Model Cars",
        cateRoute: "mr",
      },
    ]
  },
];
class Sidebar extends Component {
  showCate() {
    return arrCatefory.map((item, index) => {
      return <ItemCategory key={index} categoryItem={item} />;
    });
  }

  render() {
    return (
      <div className="warpperSidebar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
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
            <li className="listSocial--item">
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
