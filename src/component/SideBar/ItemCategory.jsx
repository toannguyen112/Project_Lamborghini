import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ItemCategory extends Component {
  renderCategorySmall = () => {
    let { categoryItem } = this.props;
    return categoryItem.cate.map((item, index) => {
      return (
        <Link to={`/${categoryItem.route}/${item.cateRoute}`} key={index}>
          <li className="nav-container-backlayer-list-item">
            <span className="nav-container-backlayer-list-item_link">
              {item.cateName}
            </span>
          </li>
        </Link>
      );
    });
  };
  render() {
    let { categoryItem } = this.props;
   

    return (
      <Link className="item--category_link" to={`/${categoryItem.route}`}>
        <li className="item--category">
          <span className="item--category_link"> {categoryItem.name} </span>

          <div className="nav-container-backlayer">
            <ul className="nav-container-backlayer-list">
              {this.renderCategorySmall()}
            </ul>
          </div>
        </li>
      </Link>
    );
  }
}
