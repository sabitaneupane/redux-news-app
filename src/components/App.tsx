import React from "react";
import { connect } from "react-redux";
import Button from "./button";
import GetNews from "./news";
import Loading from "../utils/loading";
import Error from "../utils/error";
import "../styles/app.scss";

interface IProps {
  isLoading: boolean,
  isError: boolean,
}

export const App:  React.FunctionComponent<IProps>  = (props: any) => {
  const { isLoading, isError } = props;

  return (
    <div>
      <h1> Click button below to fetch recent news.</h1>
      <Button />
      {isLoading ? <Loading /> : null}
      {isError ? <Error /> : <GetNews />}
    </div>
  );
}

const mapStateToProps = store => {
  return {
    isLoading: store.isLoading,
    isError: store.isError,
  };
};
export default connect(mapStateToProps)(App);
