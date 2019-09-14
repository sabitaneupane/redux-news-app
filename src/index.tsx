import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Route from './routes';
import store from "./store/.";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route />
    </BrowserRouter>

  </Provider>,
  document.getElementById("root")
);
