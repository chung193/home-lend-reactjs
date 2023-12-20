import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Outer from '../Templates/Backend/Outer';
import {
  Login, Register,
  LoginFullstack, RegisterFullstack,
  ResetPassword, ResetPasswordFullstack,
  ComingSoon, Maintenance
} from '../pageListAsync';

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route path="/auth" exact component={Login} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/reset-password" component={ResetPassword} />
        <Route path="/auth/login-firebase" component={LoginFullstack} />
        <Route path="/auth/register-firebase" component={RegisterFullstack} />
        <Route path="/auth/reset-password-firebase" component={ResetPasswordFullstack} />
        <Route path="/auth/maintenance" component={Maintenance} />
        <Route path="/auth/coming-soon" component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
    </Outer>
  );
}

export default Auth;
