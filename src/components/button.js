import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../api";

class Button extends Component {
  getNews = () => {
    this.props.dispatch(getData());
  }
  render() {
    return (
      <div className="getnews-button">
        <button onClick={this.getNews} > get news </button>
      </div>
    );
  }
}

export default connect(null)(Button);
