
export function ValidateLogin(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    return errors;
};

export function ValidateRegister(values) {
    let errors = {};

    if (!values.name) {
        errors.name = 'Name is required'
    } else if (values.name.length < 4) {
        errors.name = 'Name must be 5 or more characters';
    }

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 7) {
        errors.password = 'Password must be 8 or more characters';
    }

    if (!values.password2) {
        errors.password2 = 'Confirm Password is required'
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Password is not the same'
    }

    if (!values.dateofBirth) {
        errors.dateofBirth = 'Date of birth is required';
    }
    return errors;
};