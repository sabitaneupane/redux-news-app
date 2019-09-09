import React from "react";
import { connect } from "react-redux";
import { fetch_news } from "../actions";

type ActionCreator = (...args: any[]) => void;

interface IProps {
  dispatch: ActionCreator;
}

export const Button: React.FunctionComponent<IProps> = (props) => {
  const getNews = () => {
    props.dispatch(fetch_news());
  }
  return (
    <div className="getnews-button">
      <button onClick={getNews} > get news </button>
    </div>
  );
}

export default connect(null)(Button);
