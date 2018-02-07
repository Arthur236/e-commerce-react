import React from 'react';
import PropTypes from "prop-types";
import {Button, Form, Icon} from 'semantic-ui-react';
import FormInput from '../common/FormInput';

const LoginForm = ({loading, user, onClick, onChange, errors}) => {
    return (
        <Form className={loading}>
            <FormInput
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
                value={user.email}
                required="required"
                error={errors.email}
                onChange={onChange}/>

            <FormInput
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                value={user.password}
                required="required"
                error={errors.password}
                onChange={onChange}/>

            <Button type="submit" animated="fade" fluid positive onClick={onClick}>
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden><Icon name="check"/></Button.Content>
            </Button>
        </Form>
    );
};

// Validate propTypes
LoginForm.propTypes = {
    loading: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default LoginForm;
