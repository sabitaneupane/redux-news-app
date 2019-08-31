import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../api";
import "./app.scss";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }
  render() {
    const { postData, isError, isFetching } = this.props;
    return (
      <div>
        <h1> Post </h1>
        {
          isFetching ?
            <h3> Loading... <br /><br /></h3> 
            :
            Array.from(postData).map((post, index) => {
              return (
                <div key={index} className="post-content">
                  <h2> {post.title} </h2>
                  <p> {post.body} </p>
                </div>
              );
            })
        }
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    postData: store.postData,
    isError: store.isError,
    isFetching: store.isFetching,
  };
};
export default connect(mapStateToProps)(App);
