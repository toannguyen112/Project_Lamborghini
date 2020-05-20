import React, { Component } from "react";
import Sort from "../Sort/Sort";

export default class TitlePage extends Component {
  onSelectView =()=>{
    this.props.OnchangeView()
    
   
    
  }
  render() {
    let { title ,view} = this.props;
    return (
      <div className="titlePage">
        <h3 className="titlePage__text">{title}</h3>
        <Sort />
        <p className="typeDisplay"  onClick={()=>this.onSelectView()}  >
          {!view ? "View image images" : "View large images"  }
        </p>
      </div>
    );
  }
}
