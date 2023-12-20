import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Landing from '../Templates/frontend/Landing';
import { ThemeContext } from './ThemeWrapper';
import {
  LandingPage,
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent
} from '../pageListAsync';

function Frontend(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);

  return (
    <Landing history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/" component={BlankPage} />
        <Route path="/pages/dashboard" component={DashboardPage} />
        <Route path="/pages/form" component={Form} />
        <Route path="/pages/table" component={Table} />
        <Route path="/pages/page-list" component={Parent} />
        <Route path="/pages/pages/not-found" component={NotFound} />
        <Route path="/pages/pages/error" component={Error} />
        <Route component={NotFound} />
      </Switch>
    </Landing>
  );
}

Frontend.propTypes = {
  history: PropTypes.object.isRequired
};

export default Frontend;
