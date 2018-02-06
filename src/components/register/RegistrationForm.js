import React from 'react';
import PropTypes from "prop-types";
import {Button, Form, Icon} from 'semantic-ui-react';
import FormInput from '../common/FormInput';

const RegistrationForm = ({loading, user, onSave, onChange, errors}) => {
    return (
        <Form className={loading}>
            <FormInput
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                value={user.username}
                required="required"
                error={errors.username}
                onChange={onChange}/>

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

            <FormInput
                type="password"
                name="password2"
                label="Confirm Password"
                placeholder="Confirm Password"
                value={user.password2}
                required="required"
                error={errors.password2}
                onChange={onChange}/>

            <Button type="submit" animated="fade" fluid positive onClick={onSave}>
                <Button.Content visible>Create Account</Button.Content>
                <Button.Content hidden><Icon name="check"/></Button.Content>
            </Button>
        </Form>
    );
};

// Validate propTypes
RegistrationForm.propTypes = {
    loading: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default RegistrationForm;
