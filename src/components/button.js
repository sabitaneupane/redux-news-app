import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_news } from "../actions";

class Button extends Component {
  getNews = () => {
    this.props.dispatch(fetch_news());
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
