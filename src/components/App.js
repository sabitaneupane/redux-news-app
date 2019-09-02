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
        {
          !isError ?
            <div>
              <h1> Post </h1>
              {
                isFetching ?
                  <div>
                    <h3> Loading... <br /><br /></h3>
                  </div>
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
            :
            <div> Something went wrong. </div>
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
