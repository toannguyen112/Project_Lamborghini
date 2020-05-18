import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ItemCategory extends Component {
  renderCategorySmall = (cate) => {
    return cate.map((item, index) => {
      return (
        <li key={index} className="nav-container-backlayer-list-item">
          <span className="nav-container-backlayer-list-item_link">{item}</span>
        </li>
      );
    });
  };
  render() {
    let { categoryItem } = this.props;

    return (
      <Link className="item--category_link" to={categoryItem.route}>
        <li className="item--category">
          <span className="item--category_link" > {categoryItem.name} </span>

          <div className="nav-container-backlayer">
            <ul className="nav-container-backlayer-list">
              {this.renderCategorySmall(categoryItem.cate)}
            </ul>
          </div>
        </li>
      </Link>
    );
  }
}
