import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { fetch_news } from "../../actions";
import Error from "../../utils/error";
import Loading from "../../utils/loading";

interface INews {
  title: string,
  description: string,
}

interface IProps {
  postData: Array<INews>,
  canViewNews: boolean,
  isError: boolean,
  isLoading: boolean,
}

export const Getnews: React.FunctionComponent<IProps> = (props: any) => {
  const { postData, canViewNews, isError, isLoading } = props;
  useEffect(() => {
    props.dispatch(fetch_news());
  }, [])
  return (
    <div className="container">
      <h3 className="post-head"> Recent News </h3>
      {isLoading ? <Loading /> : null}
      {
        isError ? <Error /> :
          <div className="row">
            {
              canViewNews ?
                Array.from(postData).map((post: any, index) => {
                  return (
                    <div key={index} className="col-6 post-content">
                      <div className="post-content-details">
                        <h3 className="news-title"> {post.title} </h3>
                        <p className="news-description"> {post.description} </p>
                        <NavLink to="/news"> Read More </NavLink>
                      </div>
                    </div>
                  );
                })
                :
                null
            }
          </div>
      }
    </div>
  );
}

const mapStateToProps = store => {
  return {
    postData: store.postData,
    canViewNews: store.canViewNews,
    isError: store.isError,
    isLoading: store.isLoading,
  };
};
export default connect(mapStateToProps)(Getnews);
