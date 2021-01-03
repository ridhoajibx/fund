import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     let timer = setTimeout(() => setLoading(false), 2000);
    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [loading])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        if (Object.keys(errors).length === 0) {
            setLoading(true);
            callback();
        }
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        loading,
        setLoading
    }
};

export default useForm;