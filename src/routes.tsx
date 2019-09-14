import React from "react";
import App from './components/App';
import { Switch, Route } from 'react-router-dom';

const Router: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  );
}

export default Router;
