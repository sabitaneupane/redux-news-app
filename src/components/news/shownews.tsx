import React, { useEffect } from "react";
import { connect } from "react-redux";
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
  match: object,
}

export const Shownews: React.FunctionComponent<IProps> = (props: any) => {
  const {
    newsData,
    canViewNews,
    isError,
    isLoading,
    match
  } = props;

  useEffect(() => {
    props.dispatch(fetch_news());
  }, [])

  const newsId = match.params.id;
  return (
    <div>
      <h1 className="page-title"> View detail news </h1>
      {isLoading ? <Loading /> : null}
      {
        isError ? <Error /> :
          canViewNews ?
            <div className="news-container">
              <div className="card">
                <h1> {newsData[newsId - 1].title}</h1>
                <p>  {newsData[newsId - 1].description} </p>
              </div>
            </div> :
            null
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
export default connect(mapStateToProps)(Shownews);
