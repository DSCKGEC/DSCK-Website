import React from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import './App.scss';
import Layout from './Containers/Layout/Layout';
import routes from './routes';

function App() {
  return (
    <div className="main">
      {renderRoutes(routes)}
    </div>
  );
}

export default withRouter(App);
