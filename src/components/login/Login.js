import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Breadcrumb, Container, Grid, Header} from 'semantic-ui-react';
import {loginRequest} from "../../actions/authActions";
import LoginForm from './LoginForm';
import validate from '../../utils/formValidator';

export class Login extends Component {
    state = {
        user: {
            email: "",
            password: ""
        },
        errors: {}
    };

    updateUserState(event) {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;

        return this.setState({user: user});
    }

    formIsValid() {
        let isValid = true;
        let errors = {};
        let {email, password} = this.state.user;

        errors = validate({email, password});

        if (Object.keys(errors).length > 0) {
            isValid = false;
        }

        this.setState({errors: errors});
        return isValid;
    }

    loginUser(event) {
        const {loginRequest} = this.props;
        const {user} = this.state;
        event.preventDefault();

        if (this.formIsValid()) {
            loginRequest(user);
        }
    }

    render() {
        const {loading, loggedIn} = this.props;
        const {user, errors} = this.state;

        const sections = [
            {key: 'Home', content: <Link to="/">Home</Link>},
            {key: 'Login', content: 'Login', active: true},
        ];

        let loadingClass = "";
        if (loading) {
            loadingClass = "loading";
        }

        if(loggedIn) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <Container className="page_content">
                    <Breadcrumb icon="right angle" sections={sections}/>

                    <Header as="h2" textAlign="center">LOG IN</Header>

                    <Grid centered columns={2}>
                        <Grid.Column>
                            <LoginForm
                                loading={loadingClass}
                                user={user}
                                onChange={this.updateUserState.bind(this)}
                                onClick={this.loginUser.bind(this)}
                                errors={errors}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

// Define prop types
Login.propTypes = {
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    loginRequest: PropTypes.func,
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
        loggedIn: state.auth.loggedIn
    };
}

export default connect(mapStateToProps, {loginRequest})(Login);