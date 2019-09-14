import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/app.scss";

export const App: React.FunctionComponent = () =>
  (
    <div className="news-container">
        <h1 className="page-title"> News</h1>
      <div className="card">
        <p className="page-subtitle"> Click button below to fetch recent news.</p>
        <span> <NavLink to="/news" className="btn btn-success btn-sm"> Get news </NavLink> </span>
      </div>
    </div>
  );

export default App;
