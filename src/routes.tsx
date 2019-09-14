import React from "react";
import App from './components/App';
import Getnews from './components/news';
import Shownews from './components/news/shownews';
import { Switch, Route } from 'react-router-dom';

const Router: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/news" component={Getnews} />
      <Route exact path="/news/view" component={Shownews} />
    </Switch>
  );
}

export default Router;
