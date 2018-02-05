import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Breadcrumb, Container, Grid, Header} from 'semantic-ui-react';
import Navigation from "../common/Navigation";
import RegistrationForm from './RegistrationForm';
import validate from'../../utils/formValidator';

class RegisterUser extends Component {
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

        this.setState({errors: errors});
        return isValid;
    }

    saveUser(event) {
        event.preventDefault();

        if (this.formIsValid()) {
            console.log("Saving...")
        }
    }

    render() {
        const {history} = this.props;
        const {user, errors} = this.state;

        const sections = [
            {key: 'Home', content: 'Home', link: true},
            {key: 'Register', content: 'Register', active: true},
        ];

        return (
            <div>
                <Navigation history={history}/>

                <Container className="page_content">
                    <Breadcrumb icon='right angle' sections={sections}/>

                    <Header as='h2' textAlign='center'>CREATE AN ACCOUNT</Header>

                    <Grid centered columns={2}>
                        <Grid.Column>
                            <RegistrationForm
                                user={user}
                                onChange={this.updateUserState.bind(this)}
                                onSave={this.saveUser.bind(this)}
                                errors={errors}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default connect(null, null)(RegisterUser);
