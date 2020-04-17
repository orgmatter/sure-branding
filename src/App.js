import React from 'react';
import { Routes as ROUTES } from './Routes';
import PageController from './Controllers/PageController';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './sass/app.scss';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path={ROUTES.home} render={(props) => <PageController {...props} />} />
          <Route path={ROUTES.services} render={(props) => <PageController {...props} />} />
          <Route path={ROUTES.gallery} render={(props) => <PageController {...props} />} />
          <Route path={ROUTES.contactUs} render={(props) => <PageController {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
