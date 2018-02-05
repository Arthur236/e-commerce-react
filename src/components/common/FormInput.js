import React from 'react';
import {Form} from 'semantic-ui-react';

const FormInput = ({type, name, label, placeholder, value, required, error, onChange}) => {
    let errorClass, requiredClass = "";

    if (required === "required") {
        requiredClass = "required"
    } else {
        requiredClass = ""
    }
    if (error && error.length > 0) {
        errorClass = "error";
    } else {
        errorClass = "";
    }

    return (
        <Form.Field className={requiredClass + " " + errorClass}>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}/>
            {error && <span className="errorText">{error}</span>}
        </Form.Field>
    );
};

export default FormInput;
