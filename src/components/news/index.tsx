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
  newsData: Array<INews>,
  canViewNews: boolean,
  isError: boolean,
  isLoading: boolean,
}

export const Getnews: React.FunctionComponent<IProps> = (props: any) => {
  const { newsData, canViewNews, isError, isLoading } = props;
  useEffect(() => {
    props.dispatch(fetch_news());
  }, [])
  return (
    <div className="container">
      <h3 className="page-title"> Recent News </h3>
      {isLoading ? <Loading /> : null}
      {
        isError ? <Error /> :
          <div className="row news-content">
            {
              canViewNews ?
                Array.from(newsData).map((news: any, index) => {
                  const url = `/news/${news.id}`;
                  return (
                    <div key={index} className="col-6">
                      <div className="news-content card">
                        <h3 className="news-title"> {news.title} </h3>
                        <p className="news-description"> {news.description} </p>
                        <NavLink to={url}> Read More </NavLink>
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
    newsData: store.newsData,
    canViewNews: store.canViewNews,
    isError: store.isError,
    isLoading: store.isLoading,
  };
};
export default connect(mapStateToProps)(Getnews);
