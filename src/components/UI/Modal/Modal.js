import React, { Component } from "react";
import styles from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  // - We only want this modal to update if the 'show' prop changes. This will help us improve performance.
  // - So, when the user clicks the ORDER NOW button, the component will then update.
  //    Otherwise, there is no point in updating this component.
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
