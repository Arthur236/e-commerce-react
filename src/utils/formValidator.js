export default function validate(values) {
    const errors = {};
    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Validate inputs from 'values' object
    if (!values.username) {
        errors.username = "Enter a username";
    }
    if (!values.email) {
        errors.email = "Enter an email";
    }
    if (!values.password) {
        errors.password = "Enter a password";
    }
    if (!values.password2) {
        errors.password2 = "Confirm your password";
    }
    if (values.password) {
        if (values.password.length < 8) {
            errors.password = "Password should be at least 8 characters";
        }
    }
    if (values.password && values.password2) {
        if (values.password !== values.password2) {
            errors.password = "Passwords do not match";
            errors.password2 = "Passwords do not match";
        }
    }
    if (!mailFormat.test(values.email)) {
        errors.email = "Email is not valid";
    }

    // If errors is empty, the form can be submitted
    // If errors  has any properties, redux-form assumes form is invalid
    return errors;
}
