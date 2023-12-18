import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  DashboardPage,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent,
  Test,
  TabScreen,
  Threejs, 
  // real code for project
  Service,
  Configuration,
  Data,
  Administrator,
  Alarm,
  Operation
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);

  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/app" component={BlankPage} />
        <Route path="/app/pages/dashboard" component={DashboardPage} />
        <Route path="/app/pages/form" component={Form} />
        <Route path="/app/pages/table" component={Table} />
        <Route path="/app/pages/page-list" component={Parent} />
        <Route path="/app/pages/pages/not-found" component={NotFound} />
        <Route path="/app/pages/pages/error" component={Error} />
        <Route path="/app/pages/tab" component={TabScreen} />
        <Route path="/app/pages/service" component={Service} />
        <Route path="/app/pages/configuration" component={Configuration} />
        <Route path="/app/pages/data" component={Data} />
        <Route path="/app/pages/administrator" component={Administrator} />
        <Route path="/app/pages/alarm" component={Alarm} />
        <Route path="/app/pages/operation" component={Operation} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired
};

export default Application;
