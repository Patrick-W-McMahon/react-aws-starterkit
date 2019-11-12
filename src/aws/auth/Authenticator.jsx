import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CognitoState, Logout, Login, NewPasswordRequired, EmailVerification, Confirm } from 'react-cognito';
import LoginForm from './LoginForm';
import EmailVerificationForm from './EmailVerificationForm';
import NewPasswordRequiredForm from './NewPasswordRequiredForm';
import ConfirmForm from './ConfirmForm';
import LoadingScreen from '../../components/LoadingScreen';


class Authenticator extends Component {

  render() {
    const { children, user, attributes, state } = this.props;
    switch (state) {
      case CognitoState.LOGGED_IN:
        if(!React.isValidElement(children)) {
          return <div>Missing or invalid child element for Authenticator</div>;
        }
        return (
          <Fragment>
            {React.Children.map(children, child => React.cloneElement(child, {
              Logout,
              user,
              attributes
            }))}
          </Fragment>
        );
      case CognitoState.AUTHENTICATED:
      case CognitoState.LOGGING_IN:
        return (
          <Fragment>
            <LoadingScreen />
          </Fragment>
        );
      case CognitoState.LOGGED_OUT:
      case CognitoState.LOGIN_FAILURE:
        return (
          <Fragment>
            <p>not logged in</p>
            <Login>
              <LoginForm />
            </Login>
            <ul>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/reset">Password reset</Link></li>
            </ul>
          </Fragment>
        );
      case CognitoState.MFA_REQUIRED:
        return (
          <div>
            <p>You need to enter an MFA, but this library does not yet support them.</p>
          </div>
        );
      case CognitoState.NEW_PASSWORD_REQUIRED:
        return (
          <div>
            <p>New password required, since this is your first login</p>
            <NewPasswordRequired>
              <NewPasswordRequiredForm />
            </NewPasswordRequired>
          </div>
        );
      case CognitoState.EMAIL_VERIFICATION_REQUIRED:
        return (
          <div>
            <p>You must verify your email address.  Please check your email for a code</p>
            <EmailVerification>
              <EmailVerificationForm />
            </EmailVerification>
          </div>
        );
      case CognitoState.CONFIRMATION_REQUIRED:
        return (
          <div>
            <p>A confirmation code has been sent to your email address</p>
            <Confirm>
              <ConfirmForm />
            </Confirm>
            <Link to="/">Home</Link>
          </div>
        );
      default:
        return (
          <div>
            <p>Unrecognised cognito state</p>
          </div>
        );
    }
  }
}

Authenticator.propTypes = {
  user: PropTypes.object,
  attributes: PropTypes.object,
  state: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const mapStateToProps = state => ({
  state: state.cognito.state,
  user: state.cognito.user,
  attributes: state.cognito.attributes,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Authenticator);