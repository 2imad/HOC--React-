import React, { Component } from "react";
import "./Loading.css";

const isEmpty = prop => {
  return (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty("length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};

const Loading = loadingProp => WrappedComponent => {
  return class LoadingHOC extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
    }
    shouldComponentUpdate(nextProps) {
      if (!isEmpty(nextProps[loadingProp])) {
        this.endTimer = Date.now();
      }
      return true;
    }
    render() {
      const classProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };
      return isEmpty(this.props[loadingProp]) ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} {...classProps} />
      );
    }
  };
};

export default Loading;
