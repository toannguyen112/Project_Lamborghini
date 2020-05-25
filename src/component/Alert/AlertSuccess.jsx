import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Store/Action/action";
class AlertSuccess extends Component {
  onClose = () => {
    this.props.alerAddToCartSuccess();
  };
  render() {
    return (
      <div className="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
        <button
          onClick={() => this.onClose()}
          type="button"
          className="close font__size-18"
          data-dismiss="alert"
        >
          <span aria-hidden="true">
            <a
              href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
              target="_blank"
            >
              <i className="fa fa-times greencross" />
            </a>
          </span>
          <span className="sr-only">Close</span>
        </button>
        <i className="start-icon far fa-check-circle faa-tada animated" />
        <strong className="font__weight-semibold">success!</strong> You
        successfullyread add to cart.
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    alerAddToCartSuccess: () => {
      dispatch(action.alerAddToCartSuccess());
    },
  };
};
export default connect(null, mapDispatchToProps)(AlertSuccess);
