import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {notify} from 'react-notify-toast';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.loggedIn) {
                notify.show('You need to be logged in to access that page', 'error');
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.loggedIn) {
                this.props.history.push('/');
            }
        }

        render() {
            return (
                <div>
                    <ComposedComponent {...this.props} />
                </div>
            );
        }
    }

    // Define prop types
    Authenticate.propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        history: PropTypes.object.isRequired
    };

    // Map store state to component props
    function mapStateToProps(state) {
        return {
            loggedIn: state.auth.loggedIn
        };
    }

    return connect(mapStateToProps, null)(Authenticate);
}
