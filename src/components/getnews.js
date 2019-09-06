import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { postData, canViewNews } = this.props;
    return (
      <div>
        {
          canViewNews ? <h3 className="post-head"> Recent News </h3> : null 
        }
        {
          canViewNews ?
            Array.from(postData).map((post, index) => {
              return ( 
                <div key={index} className="post-content">
                  <h2> {post.title} </h2>
                  <p> {post.description} </p>
                </div>
              );
            })
            :
            null
        }
      </div>

    );
  }
}

const mapStateToProps = store => {
  return {
    postData: store.postData,
    canViewNews: store.canViewNews,
  };
};
export default connect(mapStateToProps)(App);
