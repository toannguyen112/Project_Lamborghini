import React, { Component } from "react";

import  SearchResultContainer  from "../container/SearchResultContainer";

export default class SearchResultPage extends Component {
  render() {
    return (
      <div className="warpperBodyRigth">
        <SearchResultContainer history={this.props.history}/>
      </div>
    );
  }
}
