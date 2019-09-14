import React from "react";
import App from './components/App';
import Shownews from './components/news/shownews';
import { Switch, Route } from 'react-router-dom';

const Router: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/news" component={Shownews} />
    </Switch>
  );
}

export default Router;
