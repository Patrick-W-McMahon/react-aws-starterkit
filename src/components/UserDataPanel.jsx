import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UserDataPanel = ({ attributes }) => (
  <Fragment>
    <h3>Attributes</h3>
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
  </Fragment>
);

UserDataPanel.propTypes = {
    attributes: PropTypes.arrayOf(PropTypes.string),
};

export default UserDataPanel;