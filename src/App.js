import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PasswordReset } from 'react-cognito';
import Authenticator from './aws/auth/Authenticator';
import RegisterForm from './aws/auth/RegisterForm';
import ChangePasswordForm from './aws/auth/ChangePasswordForm';
import UpdateEmailForm from './aws/auth/UpdateEmailForm';
import PasswordResetForm from './aws/auth/PasswordResetForm';
import Dashboard from './Dashboard';

console.log('dashboard', <Dashboard />);

const securePage = () => (
  <Authenticator>
    <Dashboard />
  </Authenticator>
);

/*
<Authenticator>
    <Dashboard />
  </Authenticator>
*/

const changePassword = () => (
    <div>
      <ChangePasswordForm />
      <Link to="/">Home</Link>
    </div>
);

const updateEmail = () => (
    <div>
      <UpdateEmailForm />
      <Link to="/">Home</Link>
    </div>
);

const passwordReset = () => (
  <PasswordReset>
      <PasswordResetForm/>
    </PasswordReset>
);

const registerForm = () => (
    <div>
      <p>Complete this form</p>
      <RegisterForm />
      <Link to="/">Home</Link>
    </div>
);


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={securePage}/>
          <Route exact path="/register" component={registerForm}/>
          <Route exact path="/reset" component={passwordReset}/>
          <Route exact path="/change_password" component={changePassword}/>
          <Route exact path="/change_email" component={updateEmail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
