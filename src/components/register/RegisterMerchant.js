import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Breadcrumb, Container, Grid, Header} from 'semantic-ui-react';
import {registerMerchant} from "../../actions/authActions";
import Navigation from "../common/Navigation";
import RegistrationForm from './RegistrationForm';
import validate from "../../utils/formValidator";
import * as helpers from "../../utils/helpers";

export class RegisterMerchant extends Component {
    state = {
        user: {
            username: "",
            email: "",
            password: "",
            password2: ""
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
        let {username, email, password, password2} = this.state.user;

        errors = validate({username, email, password, password2});

        if (Object.keys(errors).length > 0) {
            isValid = false;
        }

        this.setState({errors: errors});
        return isValid;
    }

    saveMerchant(event) {
        const {history, registerMerchant} = this.props;
        const {user} = this.state;
        event.preventDefault();

        if (this.formIsValid()) {
            registerMerchant(user).then(() => {
                if (this.props.registered) {
                    helpers.showToast('success', 'You were registered successfully.');
                    history.push('/login');
                }
            });
        }
    }

    render() {
        const {history, loading} = this.props;
        const {user, errors} = this.state;

        const sections = [
            {key: 'Home', content: 'Home', link: true},
            {key: 'Register', content: 'Register', active: true},
        ];

        let loadingClass = "";
        if (loading) {
            loadingClass = "loading";
        }

        return (
            <div>
                <Navigation history={history}/>

                <Container className="page_content">
                    <Breadcrumb icon="right angle" sections={sections}/>

                    <Header as="h2" textAlign="center">CREATE A MERCHANT ACCOUNT</Header>

                    <Grid centered columns={2}>
                        <Grid.Column>
                            <RegistrationForm
                                loading={loadingClass}
                                user={user}
                                onChange={this.updateUserState.bind(this)}
                                onSave={this.saveMerchant.bind(this)}
                                errors={errors}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

// Define prop types
RegisterMerchant.propTypes = {
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    registered: PropTypes.bool.isRequired,
    registerMerchant: PropTypes.func
};

// Map store state to component props
export function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
        registered: state.auth.registered
    };
}

export default connect(mapStateToProps, {registerMerchant})(RegisterMerchant);
