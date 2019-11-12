import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Dashboard extends Component {

    render() {
        const { Logout, LogoutButton, attributes, user } = this.props;
        return (
            <div>
                <p>logged in as {user.getUsername()}</p>
                <ul>
                    <li>
                        <Logout>
                            <LogoutButton />
                        </Logout>
                    </li>
                    <li><Link to="/change_password">Change password</Link></li>
                    <li><Link to="/change_email">Change email address</Link></li>
                </ul>
                <div>
                    <p>Attributes</p>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Value</td>
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(attributes).map(name =>
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{attributes[name]}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    LogoutButton: PropTypes.func, 
    Logout: PropTypes.func,
    user: PropTypes.object,
    attributes: PropTypes.object
};

const mapStateToProps = state => ({
    state: state.cognito.state,
    user: state.cognito.user,
    attributes: state.cognito.attributes,
});
  
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);