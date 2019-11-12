import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserBar from '../components/UserBar';
import UserDataPanel from '../components/UserDataPanel';

class Dashboard extends Component {

    render() {
        const { Logout, attributes, user } = this.props;
        return (
            <div>
                <UserBar user={user} Logout={Logout} />
                <div>
                   <UserDataPanel attributes={attributes} />
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = { 
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
