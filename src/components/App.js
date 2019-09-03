import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./button";
import GetNews from "./getnews";
import Loading from "./loading";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Click button below to fetch recent news.</h1>
        <Button />
        { this.props.isLoading ? <Loading /> : null }
        { this.props.isError ? <p className="error-message"> Oops something went wrong. Please try again later. </p> : <GetNews /> }
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoading: store.isLoading,
    isError: store.isError,
  };
};
export default connect(mapStateToProps)(App);
