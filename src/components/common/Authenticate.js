import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {showToast} from "../../utils/helpers";

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            if (!this.props.loggedIn) {
                showToast('error', 'You need to be logged in to access that page');
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
