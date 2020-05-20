import React, { Component } from "react";
import { connect } from "react-redux";
import TitlePage from "../component/TitlePage/TitlePage";
import * as action from "../Store/Action/action";
export class TitlePageContainer extends Component {
  render() {
    let { OnchangeView, view } = this.props;

    return <TitlePage  title={this.props.title}  OnchangeView={OnchangeView} view={view} />;
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.TypeDisplayView,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    OnchangeView: () => {
      dispatch(action.changeView());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlePageContainer);
