import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserDataPanel = ({ user, Logout, LogoutButton }) => (
  <Fragment>
    <p>logged in as {user.getUsername()}</p>
    <ul>
        <li>
            <Logout>
                <button>Logout</button>
            </Logout>
        </li>
        <li><Link to="/change_password">Change password</Link></li>
        <li><Link to="/change_email">Change email address</Link></li>
    </ul>
  </Fragment>
);

UserDataPanel.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string),
};

export default UserDataPanel;